const { tagParse, render } = require('../../utils')
const storedTags = require('../../tag')
const tagButton = require('../components/tagButton')

module.exports = (card) => {
  const image = card.image_uris?.normal || card.card_faces[0].image_uris.normal
  const { colors, keywords, types, text } = tagParse(storedTags, card)

  return `
    <div class="columns box">
        <div class="column">
            <span>
                <img src="${image}"/>
            </span>
        </div>
        <div class="column">
            <div id="tag-container" class="box">
                <label class="label is-size-3">Related Search Tags</label>
                <div class="block">
                <label class="label">Color:</label>
                <div>${render(colors, tagButton)}</div>
                <label class="label">Type:</label>
                <div>${render(types, tagButton)}</div>
                <label class="label">Keyword:</label>
                <div>${render(keywords, tagButton)}</div>
                <label class="label">Text:</label>
                <div>${render(text, tagButton)}</div>
                <label class="label has-text-white">SPACE</label>
                <form id="tag-form" action="/cards">
                    <input hidden name="color" type="text">
                    <input hidden name="type" type="text">
                    <input hidden name="text" type="text">
                    <input hidden name="set" type="text">
                    <button class="button is-danger">Submit</button>     
                </form>
            </div>
        </div>
    </div> 
    <script src="/cardTemplateScript.js"></script>
        
    `
}
