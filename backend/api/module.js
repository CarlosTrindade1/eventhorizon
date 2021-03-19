module.exports = app => {

    const getModules = async (req, resp) => {
        const modules = await app.db('modules')

        resp.json(modules)
    }

    const getModulesWithChapters = async (req, resp) => {
        let modules = await app.db('modules')
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

    return {getModules, getModulesWithChapters}
}