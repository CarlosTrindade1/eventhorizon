module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = (req, resp) => {
        const chapter = {...req.body}

        if (req.params.id) this.chapter.id = req.params.id

        try {
            existsOrError(chapter.name, 'Informe o nome do capítulo')
            existsOrError(chapter.description, 'Informe a descrição do artigo')
            existsOrError(chapter.imageUrl, 'Informe a imagem do artigo')
            existsOrError(chapter.moduleId, 'Informe o módulo do capítulo')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        if (chapter.id){
            app.db('chapters')
                .update(chapter)
                .where({id: chapter.id})
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('chapters')
                .insert(chapter)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }
    }

    const remove = async (req, resp) => {
        const id = req.params.id

        const chapterFromDB = await app.db('chapters')
            .where({id: id})
            .first()

        try {
            existsOrError(chapterFromDB, 'Capítulo não encontrado!')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        app.db('chapters')
            .where({id: id})
            .del()
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
    }

    const get = (req, resp) => {
        app.db('chapters')
            .then(chapters => resp.json(chapters))
            .catch(err => resp.status(500).send(err))
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

    return {get, createUserChapter, getQuestionLevelByChapter, setQuestionLevelByChapter, save, remove}
}