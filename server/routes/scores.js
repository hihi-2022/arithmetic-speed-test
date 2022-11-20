const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getScores()
    .then((scores) => {
      res.json(scores)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req,res)=>{
  const {name,score} = req.body
  db.saveScore(name,score)
    .then(()=>{
      res.status(200).send()
    }).catch(err=>{
      res.status(500).send(err.message)
    })
})

module.exports = router
