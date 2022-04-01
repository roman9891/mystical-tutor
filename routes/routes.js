const { response } = require('express')
const express = require('express')

const { getCards, getCard } = require('../scryfallAPI')
const { queryAssembler } = require('../utils')
const layout = require('../views/layout')
const cardsTemplate = require('../views/templates/cardsTemplate')
const cardTemplate = require('../views/templates/cardTemplate')
const searchTemplate = require('../views/templates/searchTemplate')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(layout('HOMEPAGE'))
})

router.get('/search', (req, res) => {
  res.send(layout(searchTemplate()))
})

router.get('/cards', async (req, res) => {
  const formData = { ...req.query }
  const searchTerm = queryAssembler(formData)
  let data

  try {
    data = await getCards(searchTerm)
  } catch (err) {
    data = {}
    console.log(err)
    // return error template
  }
  // detect if next page

  res.send(layout(cardsTemplate(data)))
})

router.post('/cards', (req, res) => {
  res.send(layout('POST SEARCH'))
})

router.get('/cards/:id', async (req, res) => {
  const id = req.params.id
  let data

  try {
    data = await getCard(id)
  } catch (err) {
    data = {}
    console.log(err)
    // return error template
  }

  res.send(layout(cardTemplate(data)))
})

router.get('/docs', (req, res) => {
  res.send(layout('DOCS'))
})

router.get('/about', (req, res) => {
  res.send(layout('ABOUT'))
})

module.exports = router
