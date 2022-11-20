exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('scores')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('scores').insert([
        {
          id: 1,
          name: 'Tom',
          score: 10,
        },
        {
          id: 2,
          name: 'Amy',
          score: 8,
        },
        {
          id: 3,
          name: 'Alice',
          score: 5,
        },
      ])
    })
}
