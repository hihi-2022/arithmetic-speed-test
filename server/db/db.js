const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getScores,
}

function getScores(db = connection) {
  return db('scores').select()
}
