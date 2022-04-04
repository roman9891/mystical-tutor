const blockImage = require('../components/blockImage')
const column = require('../components/column')
const columns = require('../components/columns')

module.exports = (data) => {
  const cards = data.data
  const next = data.has_more

  return columns(cards, 4, column)
}
