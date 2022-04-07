module.exports = (card) => {
  const image = card.image_uris?.normal || card.card_faces[0].image_uris.normal
  return `
        <div class="block">
            <a href="/cards/${card.id}">
                <img src ="${image}"/>
            </a>
        </div>
    `
}
