exports.up = function(knex) {
	Promise.all([
		knex.schema.createTable('projects', (table) => {
			table.uuid('id').primary();
			table.string('title').notNullable();
			table.text('description');
			table.string('topic');
			table.integer('member');
			table.integer('users_id').references('users.id')
			table.timestamp('created_at').defaultTo(knex.fn.now());
		})
	]);
};

exports.down = function(knex) {
	return Promise.all([ knex.schema.dropTable('projects') ]);
};
