module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    // Modules
    app.route('/modules')
        .get(app.api.module.getModules)
        .post(app.api.module.save)

    app.route('/modules/:id')
        .put(app.api.module.save)
        .delete(app.api.module.remove)

    app.route('/modulesWithChapters')
        .get(app.api.module.getModulesWithChapters)

    // Chapters
    app.route('/chapters')
        .get(app.api.chapter.get)
        .post(app.api.chapter.save)

    app.route('/chapters/:id')
        .put(app.api.chapter.save)
        .delete(app.api.chapter.remove)

    app.route('/chapters/:id/questions')
        .get(app.api.question.getQuestionsByChapter)

    // Questions
    app.route('/questions')
        .get(app.api.question.get)
        .post(app.api.question.save)

    app.route('/questions/:id')
        .put(app.api.question.save)
        .delete(app.api.question.remove)
        .get(app.api.question.getById)

    // Users
    app.route('/users')
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route('/users/:id')
        .put(app.api.user.save)
        .delete(app.api.user.remove)

    app.route('/user/update')
        .post(app.api.user.update)

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

    // Stats
    app.route('/stats')
        .get(app.api.stat.get)

}