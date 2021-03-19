module.exports = app => {
    
    const getChapters = async (req, resp) => {
        const chapters = await app.db('chapters')

        resp.json(chapters)
    }

    return {getChapters}
}