const axios = require('axios')

const BASEURL = 'https://api.scryfall.com'
const SEARCHEND = '/cards/search'
const AUTOCOMPLETE = '/cards/autocomplete'
const CARDS = '/cards/'
const CARDBACKIMG =
  'https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013'

module.exports = {
  getCards: async (searchTerm) => {
    const response = await axios.get(BASEURL + SEARCHEND, {
      params: {
        q: searchTerm,
      },
    })

    if (response.data.Error) return []

    return response.data
  },
  getCard: async (id) => {
    const response = await axios.get(BASEURL + CARDS + id)

    if (response.data.Error) return []

    return response.data
  },
}
