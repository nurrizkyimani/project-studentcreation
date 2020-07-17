
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', table => {
      table.increment('id').primary()
      table.string('name').notNullable()
      table.string('faculty').notNullable()
      table.string('department')
      table.string('year')
      table.string('linkedin')
      table.string('line')
      })
      
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
