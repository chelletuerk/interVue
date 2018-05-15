exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('questions', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('description');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('url', function(table) {
      table.increments('id').primary();
      table.string('url');
      table.integer('question_id').unsigned()
      table.foreign('question_id')
        .references('questions.id');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('url'),
    knex.schema.dropTable('questions')
  ]);
};
