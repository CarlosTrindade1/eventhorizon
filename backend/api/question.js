module.exports = app => {
    const save = (req, resp) => {
        const question = {...req.body}

        app.db('questions')
            .insert(question)
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
    }

    const getQuestionsByChapter = (req, resp) => {
        // if (!req.params.id)
        const id = req.params.id
        
        app.db('questions')
            .where({chapterId: id})
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