exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('scores')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('scores').insert([
        {
          id: 1,
          name: 'Louis',
          score: 0,
        },
      ])
    })
}
