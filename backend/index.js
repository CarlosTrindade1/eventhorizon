const app = require('express')()
const consign = require('consign')

consign()
    .include('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Backend executando...')
})