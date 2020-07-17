
exports.up = function (knex, Promise) {
    Promise.all([
        knex.schema.createTable('projects', table => {
            table.uuid('id').primary()
            table.string('title').notNullable()
            table.text('description')
            table.string('topic')
            table.integer('member')
        })
    ])
};

exports.down = function(knex, Promise) {
    Promise.all([
    knex.schema.dropTable('projects')
  ])
};
