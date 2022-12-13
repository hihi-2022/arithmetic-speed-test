exports.up = (knex) => {
  return knex.schema.createTable('scores', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('score')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('scores')
}
