const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('0 0 * * 7', async function(){
        app.db('users')
            .update({monthExp: 0})
            .then(_ => console.log('Ranking reiniciado!'))
            .catch(err => console.log(err))
    })
}