const blockImage = require('../components/blockImage')
const column = require('../components/column')
const columns = require('../components/columns')

module.exports = (data) => {
  const cards = data.data

  return columns(cards, 3, column)
}
