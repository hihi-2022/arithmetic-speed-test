const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getScores,
  saveScore,
  updateName
}

function getScores(db = connection) {
  return db('scores').select()
}

function saveScore(name,score,db=connection){
  return db('scores').insert({name,score})
}

function updateName(id,name, db=connection){
  return db('scores').where('id',id).update({name})
}
