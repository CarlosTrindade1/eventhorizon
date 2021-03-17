
exports.up = function(knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary()
        table.integer('chapterId').references('id')
            .inTable('chapters')
        table.string('name')
        table.binary('content').notNull()
        table.string('response', 1).notNull()
        table.integer('level').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions')
};
