const { render } = require('../../utils')
const blockImage = require('./blockImage')

module.exports = (contentArray, numColumns = 1, componentFunc) => {
  let columns = []

  for (let i = 0; i < numColumns; i++) columns.push([])

  contentArray.forEach((content, i) =>
    columns[i % columns.length].push(content)
  )

  columns = columns.map(componentFunc).join('')

  return `
        <div class="columns box">${columns}</div>
    `
}
