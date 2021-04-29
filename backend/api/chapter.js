module.exports = app => {
    
    const getChapters = async (req, resp) => {
        const chapters = await app.db('chapters')

        resp.json(chapters)
    }

    const createUserChapter = async (req, resp) => {
        const userId = req.params.idUser
        const chapterId = req.params.idChapter

        const userChapter = await app.db('userChapters')
            .where({userId: userId, chapterId: chapterId})
            .first()
        
        if (userChapter === null || userChapter === undefined){
            app.db('userChapters')
                .insert({userId: userId, chapterId: chapterId, questionLevel: 0})
                .catch(err => resp.status(500).send(err))
        }
    }

    const getQuestionLevelByChapter = (req, resp) => {
        const userId = req.params.idUser
        const chapterId = req.params.idChapter

        app.db('userChapters')
            .select('questionLevel')
            .where({userId: userId, chapterId: chapterId})
            .first()
            .then(userChapter => resp.json(userChapter))
            .catch(err => resp.status(500).send(err))
    }

    const setQuestionLevelByChapter = async (req, resp) => {
        const userId = req.params.idUser
        const chapterId = req.params.idChapter
        const value = {...req.body}

        app.db.raw('UPDATE "userChapters" SET "questionLevel" = "questionLevel" + ? WHERE "userId" = ? AND "chapterId" = ?', [value.value, userId, chapterId])
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))

    }

    return {getChapters, createUserChapter, getQuestionLevelByChapter, setQuestionLevelByChapter}
}