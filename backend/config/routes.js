module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/modules')
        .get(app.api.module.getModules)

    app.route('/modulesWithChapters')
        .get(app.api.module.getModulesWithChapters)

    app.route('/chapters')
        .get(app.api.chapter.getChapters)

    app.route('/chapters/:id/questions')
        .get(app.api.question.getQuestionsByChapter)

    app.route('/questions')
        .post(app.api.question.save)
}