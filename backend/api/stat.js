module.exports = app => {
    const get = async (req, resp) => {
        const countUsers = await app.db('users')
            .count()
            .first()
        
        const countModules = await app.db('modules')
            .count()
            .first()

        const countChapters = await app.db('chapters')
            .count()
            .first()

        const countQuestions = await app.db('questions')
            .count()
            .first()

        const stats = {countUsers, countModules, countChapters, countQuestions}

        resp.json(stats)
    }

    return {get}
}