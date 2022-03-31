const form = require('../components/form')
const { textInput, dropdownInput, checkbox } = require('../components/input')

module.exports = () => {
  const inputs = [
    textInput('name', 'Name: ', ''),
    textInput('type', 'Type: ', ''),
    textInput('text', 'Text: ', ''),
    textInput('set', 'Set: ', ''),
    checkbox('w', 'White'),
    checkbox('u', 'Blue'),
    checkbox('b', 'Black'),
    checkbox('r', 'Red'),
    checkbox('g', 'Green'),
    dropdownInput('rarity', 'Rarity: ', [
      '',
      'common',
      'uncommon',
      'rare',
      'mythic',
    ]),
  ]

  return `
        ${form('search-form', '/cards', 'post', 'Search Criteria', inputs)}
    `
}
