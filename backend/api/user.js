const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, resp) => {
        const userStats = {
            dailyTarget: 50,
            valueDailyTarget: 0,
            weekExp: 0,
            monthExp: 0,
            yearExp: 0,
            totalExp: 0,
            ranking: 0
        }

        const user = {...req.body, ...userStats}
        
        if (req.params.id) user.id = req.params.id

        if (!req.originalUrl.startsWith('/users')) user.admin = false
        if (!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            if (!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg){
            return resp.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id){
            app.db('users')
                .update(user)
                .where({id: user.id})
                .whereNull('deletedAt')
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }
    }

    const update = async (req, resp) => {
        const user = {...req.body}

        if (user.password){
            try {
                existsOrError(user.confirmPassword, 'Insira a senha atual')
                existsOrError(user.password, 'Insira uma nova senha')
            } catch(msg) {
                return resp.status(400).send(msg)
            }

            const userDataBase = await app.db('users')
                .where({id: user.id})
                .first()
                .catch(err => resp.status(500).send(err))

            const isMatch = bcrypt.compareSync(user.confirmPassword, userDataBase.password)

            if (!isMatch) return resp.status(401).send('Senha atual inválida')

            user.password = encryptPassword(user.password)

            delete user.confirmPassword
        }

        app.db('users')
                .update(user)
                .where({id: user.id})
                // .whereNull('deletedAt')
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
    }

    const getStats = (req, resp) => {
        const userId = req.params.id

        app.db('users')
            .select('dailyTarget', 'valueDailyTarget','weekExp', 'monthExp', 'yearExp', 'totalExp', 'ranking')
            .where({id: userId})
            .first()
            .then(stats => resp.json(stats))
            .catch(err => resp.status(500).send(err))
    }

    const updateStats = (req, resp) => {
        const stats = {...req.body}
        const userId = req.params.id


        app.db('users')
            .update({...stats})
            .where({id: userId})
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
    }

    const getRankingByLevel = async (req, resp) => {
        const level = req.params.level

        const users = await app.db('users')
            .select('name', 'weekExp')
            .where({ranking: level})
            .orderBy('weekExp', 'desc')
            .catch(err => resp.status(500).send(err))

        for (let i = 0; i < users.length; i++){
            users[i] = {index: i, ...users[i]}
        }

        resp.json(users)
    }

    return {save, getStats, updateStats, getRankingByLevel, update}
}