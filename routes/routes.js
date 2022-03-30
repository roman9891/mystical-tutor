const express = require('express')
const layout = require('../views/layout')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(layout('HOMEPAGE'))
})

router.get('/search', (req, res) => {
  res.send(layout('SEARCH PAGE'))
})
router.post('/search', (req, res) => {
  res.send(layout('POST SEARCH'))
})

router.get('/cards', (req, res) => {
  res.send(layout('CARDS'))
})

router.get('/cards/:id', (req, res) => {
  res.send(layout(`CARD: ${req.params.id}`))
})

router.get('/docs', (req, res) => {
  res.send(layout('DOCS'))
})

router.get('/about', (req, res) => {
  res.send(layout('ABOUT'))
})

module.exports = router
