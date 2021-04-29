module.exports = app => {
    const save = (req, resp) => {
        const question = {...req.body}

        app.db('questions')
            .insert(question)
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
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

    return {getQuestionsByChapter, save}
}