
exports.up = function(knex, Promise) {
  return knex.schema

  .createTable('users', (table) => {
    table.uuid('id').primary().unique().notNullable()
    table.text('email').unique().notNullable()
    table.text('username').unique().notNullable()
    table.text('password').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
}
