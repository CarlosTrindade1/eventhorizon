const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('0 0 * * 7', function(){
        promoteUsers()
        reset()
    })

    // Function to promote users to the next rank
    async function promoteUsers(){
        for (let i=4; i >= 1; i--){
            let users = await app.db('users')
                .where({ranking: i})
                .orderBy('ranking')

            if (users){
                for (let j=0; j < 5; j++){
                    if (users[j]){
                        app.db('users')
                            .update({ranking: i+1})
                            .where({id: users[j].id})
                            .then(_ => console.log('Usuário promovido com sucesso!'))
                            .catch(err => console.log(err))
                    } 
                }
            }
        }
    }

    function reset(){
        app.db('users')
            .update({weekExp: 0})
            .then(_ => console.log('Ranking reiniciado'))
            .catch(err => console.log(err))
    }
}