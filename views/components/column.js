const { render } = require('../../utils')
const blockImage = require('./blockImage')

module.exports = (column) => {
  return `
      <div class="column">
          ${render(column, blockImage)}
      </div>
    `
}
