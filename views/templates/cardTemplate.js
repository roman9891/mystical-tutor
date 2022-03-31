module.exports = (data) => {
  console.log(data)
  const card = data
  return `
  <img src ="${
    card.image_uris?.normal || card.card_faces[0].image_uris.normal
  }"/>
    `
}
