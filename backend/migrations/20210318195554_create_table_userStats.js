
exports.up = function(knex) {
  return knex.schema.createTable('userStats', table => {
    table.increments('id').primary()
    table.integer('userId').references('id')
        .inTable('users')
    table.integer('dailyTarget').notNull()
    table.integer('valueDailyTarget').notNull()
    table.integer('weekExp').notNull()
    table.integer('monthExp').notNull()
    table.integer('yearExp').notNull()
    table.integer('totalExp').notNull()
    table.integer('ranking').notNull()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('userStats')
};
