const { tagParse } = require('../../utils')
const storedTags = require('../../tag')

module.exports = (card) => {
  const { colors, keywords, types, text } = tagParse(storedTags, card)
  const renderTags = (tags) =>
    tags.map((tag) => `<button>${tag.name}</button>`).join('')

  return `
        <span><img src ="${
          card.image_uris?.normal || card.card_faces[0].image_uris.normal
        }"/></span>
        <span>
            <div>Colors: ${renderTags(colors)}</div>
            <div>Types: ${renderTags(types)}</div>
            <div>Keywords: ${renderTags(keywords)}</div>
            <div>Text: ${renderTags(text)}</div>
        </span>
        
    `
}
