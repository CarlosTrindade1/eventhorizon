module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = (req, resp) => {
        const module = {...req.body}

        if (!module.numberChapters) module.numberChapters = 0

        if (req.params.id) module.id = req.params.id

        try {
            existsOrError(module.name, 'Informe o nome do módulo')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        if (module.id){
            app.db('modules')
                .update(module)
                .where({id: module.id})
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('modules')
                .insert(module)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }
        
    }

    const remove = async (req, resp) => {
        const id = req.params.id

        const moduleFromDB = await app.db('modules')
            .where({id: id})
            .first()

        try {
            existsOrError(moduleFromDB, 'Módulo não encontrado!')
        } catch(msg){
            return resp.status(400).send(msg)
        }

        app.db('modules')
            .where({id: id})
            .del()
            .then(_ => resp.status(204).send())
            .catch(err => resp.status(500).send(err))
    }

    const getModules = async (req, resp) => {
        app.db('modules')
            .orderBy('id')
            .then(modules => resp.json(modules))
            .catch(err => resp.status(500).send(err))
    }

    const getModulesWithChapters = async (req, resp) => {
        let modules = await app.db('modules').orderBy('id')
        let chapters = await app.db('chapters')

        let modulesWithChapters = modules.map(m => {
            let chaptersByModule = getChaptersByModule(m.id, chapters)

            return {...m, chapters: chaptersByModule}
        })

        function getChaptersByModule(moduleId, chapters){
            let chaptersByModule
            chaptersByModule = chapters.filter(chapter => chapter.moduleId == moduleId)
            return chaptersByModule.length ? chaptersByModule : null
        }

        resp.json(modulesWithChapters)
        
    }

    return {getModules, getModulesWithChapters, save, remove}
}