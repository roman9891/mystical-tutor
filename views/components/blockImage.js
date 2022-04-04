module.exports = (card) => {
  const image = card.image_uris?.small || card.card_faces[0].image_uris.small
  return `
        <div class="block">
            <a href="/cards/${card.id}">
                <img src ="${image}"/>
            </a>
        </div>
    `
}
