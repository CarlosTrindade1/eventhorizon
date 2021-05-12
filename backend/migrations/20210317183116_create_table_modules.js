
exports.up = function(knex) {
    return knex.schema.createTable('modules', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('numberChapters').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('modules')
};
