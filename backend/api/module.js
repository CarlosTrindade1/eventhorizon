module.exports = app => {

    const getModules = async (req, resp) => {
        const modules = await app.db('modules')

        resp.json(modules)
    }

    return {getModules}
}