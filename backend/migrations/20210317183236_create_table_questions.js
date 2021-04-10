
exports.up = function(knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary()
        table.integer('chapterId').references('id')
            .inTable('chapters')
        table.string('name')
        table.binary('content').notNull()
        table.string('response', 1).notNull()
        table.integer('level').notNull()
        table.string('choiceA')
        table.string('choiceB')
        table.string('choiceC')
        table.string('choiceD')
        table.string('choiceE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};
