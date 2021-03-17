module.exports = app => {
    app.get('/', (req, resp) => {
        resp.send(`
            <h1>Hello world!</h1>
        `)
    })
}