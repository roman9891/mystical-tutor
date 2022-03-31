module.exports = (data) => {
  const cards = data.data
  const renderCards = (cards) => {
    return cards
      .map(
        (card) =>
          `<a href="/cards/${card.id}"><img src ="${
            card.image_uris?.small || card.card_faces[0].image_uris.small
          }"/></a>`
      )
      .join('')
  }

  return `
        <div id="cards-div">
            ${renderCards(cards)}
        </div>
    `
}
