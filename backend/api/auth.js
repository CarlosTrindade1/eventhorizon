const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, resp) => {
        if (!req.body.email || !req.body.password) {
            return resp.status(400).send('Informe o usuário e senha!')
        }

        const user = await app.db('users')
            .where({email: req.body.email})
            .first()

        if (!user) return resp.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return resp.status(401).send('E-mail ou senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        resp.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, resp) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()){
                    return resp.send(true)
                }
            }
        } catch (e) {
            // problema com o token
        }

        resp.send(false)
    }

    return {signin, validateToken}
}