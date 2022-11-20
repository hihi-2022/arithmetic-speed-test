const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getScores,
  saveScore
}

function getScores(db = connection) {
  return db('scores').select()
}

function saveScore(name,score,db=connection){
  return db('scores').insert({name,score})
}
