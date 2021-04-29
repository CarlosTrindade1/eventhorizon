module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    // Modules
    app.route('/modules')
        .get(app.api.module.getModules)

    app.route('/modulesWithChapters')
        .get(app.api.module.getModulesWithChapters)

    // Chapters
    app.route('/chapters')
        .get(app.api.chapter.getChapters)

    app.route('/chapters/:id/questions')
        .get(app.api.question.getQuestionsByChapter)

    // Questions
    app.route('/questions')
        .post(app.api.question.save)

    //
    app.route('/user/:id/stats')
        .get(app.api.user.getStats)
        .post(app.api.user.updateStats)

    //
    app.route('/user/:idUser/chapter/:idChapter')
        .get(app.api.chapter.createUserChapter)

    app.route('/user/:idUser/chapter/:idChapter/questionLevel')
        .get(app.api.chapter.getQuestionLevelByChapter)
        .post(app.api.chapter.setQuestionLevelByChapter)

    // ranking
    app.route('/users/ranking/:level')
        .get(app.api.user.getRankingByLevel)

}