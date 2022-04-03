const { tagParse, render } = require('../../utils')
const storedTags = require('../../tag')
const tagButton = require('../components/tagButton')

module.exports = (card) => {
  const image = card.image_uris?.normal || card.card_faces[0].image_uris.normal
  const { colors, keywords, types, text } = tagParse(storedTags, card)

  return `
        <span>
            <img src="${image}"/>
        </span>
        <span id="tag-container">
            <div>Colors: ${render(colors, tagButton)}</div>
            <div>Types: ${render(types, tagButton)}</div>
            <div>Keywords: ${render(keywords, tagButton)}</div>
            <div>Text: ${render(text, tagButton)}</div>
        </span>
        <form id="tag-form" action="/cards">
            <input hidden name="color" type="text">
            <input hidden name="type" type="text">
            <input hidden name="text" type="text">
            <input hidden name="set" type="text">
            <button>Submit</button>
        </form>
        <script src="/cardTemplateScript.js"></script>
        
    `
}
