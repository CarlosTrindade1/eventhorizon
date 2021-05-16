module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = (req, resp) => {
        const question = {...req.body}

        if (req.params.id) question.id = req.params.id
            
        try {
            existsOrError(question.name, 'Informe o nome da questão')
            existsOrError(question.content, 'Informe o texto da questão')
            existsOrError(question.chapterId, 'Informe o capítulo da questão')
            existsOrError(question.response, 'Informe a resposta da questão')
            existsOrError(question.level, 'Informe o nível da questão')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        if (question.id){
            app.db('questions')
                .update(question)
                .where({id: question.id})
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('questions')
            .insert(question)
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
        }
    }

    const get = (req, resp) => {
        app.db('questions')
            .then(questions => resp.json(questions))
            .catch(err => resp.status(500).send(err))
    }

    const getById = (req, resp) => {
        app.db('questions')
            .where({id: req.params.id})
            .first()
            .then(question => {
                question.content = question.content.toString()
                return resp.json(question)
            })
            .catch(err => resp.status(500).send(err))
    }

    const remove = async (req, resp) => {
        const id = req.params.id

        const questionFromDB = await app.db('questions')
            .where({id: id})
            .first()

        try {
            existsOrError(questionFromDB, 'Questão não encontrada!')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        app.db('questions')
            .where({id: id})
            .del()
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send())
    }

    const getQuestionsByChapter = (req, resp) => {
        const id = req.params.id
        const level = req.query.level
        
        app.db('questions')
            .where({chapterId: id, level: level})
            .then(questions => {
                questionsSolved = questions.map(question => {
                    question.content = question.content.toString()
                    return question
                })
                return resp.json(questionsSolved)
            })
    }

    return {getQuestionsByChapter, save, get, getById, remove}
}