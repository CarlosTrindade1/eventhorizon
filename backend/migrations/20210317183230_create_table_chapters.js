
exports.up = function(knex) {
    return knex.schema.createTable('chapters', table => {
        table.increments('id').primary()
        table.integer('moduleId').references('id')
            .inTable('modules')
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000).notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('chapters')
};
