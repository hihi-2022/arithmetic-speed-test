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
    .then((id)=>{
      res.status(200).json({id})
    }).catch(err=>{
      res.status(500).send(err.message)
    })
})

router.patch('/', (req,res)=>{
  const {id, name} = req.body
  db.updateName(id, name)
    .then(()=>{
      res.status(200).json()
    }).catch(err=>{
      res.status(500).send(err.message)
    })
})

module.exports = router
