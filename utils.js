module.exports = {
  render: (dataArray, componentFunc) => {
    return dataArray.map(componentFunc).join('')
  },
  queryAssembler: (formData) => {
    let searchTerm = ''

    if (formData.name) searchTerm += ` ${formData.name}`
    if (formData.type) {
      const words = formData.type.split(' ')
      words.forEach((word) => (searchTerm += ` t:${word}`))
    }
    if (formData.text) {
      // const reg = formData.text.split('/')

      // reg.forEach((term) => {
      //   searchTerm += ' o:/' + term + '/'
      // })
      // console.log(searchTerm)
      const words = formData.text.split(' ')
      words.forEach((word) => {
        if (word === 'or') searchTerm += ' or'
        else if (word[0] === '-') searchTerm += ` -o:${word.slice(1)}`
        else searchTerm += ` o:${word}`
      })
    }
    if (formData.set) searchTerm += ` e:${formData.set}`
    if (formData.rarity) searchTerm += ` r:${formData.rarity}`

    if (formData.w || formData.u || formData.b || formData.r || formData.g) {
      searchTerm += ' c:'
      if (formData.w) searchTerm += 'w'
      if (formData.u) searchTerm += 'u'
      if (formData.b) searchTerm += 'b'
      if (formData.r) searchTerm += 'r'
      if (formData.g) searchTerm += 'g'
    } else if (formData.color) {
      searchTerm += ` c:${formData.color}`
    }
    console.log({ formData, searchTerm })
    return searchTerm.trim()
  },
  tagParse: (tags, card) => {
    const cardColors = card.colors
    const cardTypes = card.type_line
    const cardText = card.oracle_text
    const cardKeywords = card.keywords

    return {
      colors: cardColors ? colorParse(cardColors) : [],
      types: typeParse(cardTypes),
      keywords: cardKeywords ? keywordParse(cardKeywords) : [],
      text: textParse(tags, cardText),
    }
  },
  tagParseDFC: (tags, card) => {
    const card1 = card.card_faces[0]
    const card2 = card.card_faces[1]
    const cardKeywords = card.keywords

    return {
      colors: [...colorParse(card1.colors), ...colorParse(card2.colors)],
      types: [...typeParse(card1.type_line), ...typeParse(card2.type_line)],
      keywords: keywordParse(cardKeywords),
      text: [
        ...textParse(tags, card1.oracle_text),
        ...textParse(tags, card2.oracle_text),
      ],
    }
  },
}

const colorParse = (colors) => {
  const result = []

  if (colors.includes('W')) {
    result.push({
      type: 'color',
      name: 'White',
      searchTerm: 'w',
    })
  }
  if (colors.includes('U')) {
    result.push({
      type: 'color',
      name: 'Blue',
      searchTerm: 'u',
    })
  }
  if (colors.includes('B')) {
    result.push({
      type: 'color',
      name: 'Black',
      searchTerm: 'b',
    })
  }
  if (colors.includes('R')) {
    result.push({
      type: 'color',
      name: 'Red',
      searchTerm: 'r',
    })
  }
  if (colors.includes('G')) {
    result.push({
      type: 'color',
      name: 'Green',
      searchTerm: 'g',
    })
  }

  return result
}

const typeParse = (types) => {
  const emdash = String.fromCharCode(8212)
  return types
    .split(' ')
    .filter((element) => element !== emdash)
    .map((type) => {
      return {
        type: 'type',
        name: type,
        searchTerm: ` ${type}`,
      }
    })
}

const textParse = (tags, text) => {
  const result = []

  for (let key in tags) {
    const tag = tags[key]
    if (text.match(tag.regex)) result.push(tag)
  }

  return result
}

const keywordParse = (keywords) => {
  return keywords.map((keyword) => {
    return {
      type: 'text',
      name: keyword,
      searchTerm: ` ${keyword}`,
    }
  })
}
