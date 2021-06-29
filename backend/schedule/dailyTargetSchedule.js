const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('0 0 * * *', function(){
        app.db('users')
            .update({valueDailyTarget: 0})
            .then(_ => console.log('Meta diária redefinida!'))
            .catch(err => console.log(err))
    })
}