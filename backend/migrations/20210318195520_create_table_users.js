
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('imageUrl')
        table.boolean('admin').notNull()
        table.integer('dailyTarget')
        table.integer('valueDailyTarget')
        table.integer('weekExp')
        table.integer('monthExp')
        table.integer('yearExp')
        table.integer('totalExp')
        table.integer('ranking')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
