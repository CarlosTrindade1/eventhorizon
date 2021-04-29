
exports.up = function(knex) {
    return knex.schema.createTable('userChapters', table => {
        table.increments('id').primary()
        table.integer('userId').notNull()
        table.integer('chapterId').notNull()
        table.integer('questionLevel')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('userChapters')
};
