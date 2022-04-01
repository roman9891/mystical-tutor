module.exports = {
  render: (data, template) => {},
  queryAssembler: (formData) => {
    let searchTerm = ''

    if (formData.name) searchTerm += ` ${formData.name}`
    if (formData.type) searchTerm += ` t:${formData.type}`
    if (formData.text) {
      const words = formData[key].split(' ')
      words.forEach((word) => (searchTerm += ` o:${word}`))
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
    }

    return searchTerm
  },
  tagParse: (tags, card) => {
    const cardColors = card.colors
    const cardTypes = card.type_line
    const cardText = card.oracle_text
    const cardKeywords = card.keywords

    return {
      colors: colorParse(cardColors),
      types: typeParse(cardTypes),
      keywords: keywordParse(cardKeywords),
      text: textParse(tags, cardText),
    }
  },
  colorParse: (colors) => {
    const result = []

    if (colors.includes('W')) {
      result.push({
        name: 'White',
        searchTerm: 'w',
      })
    }
    if (colors.includes('U')) {
      result.push({
        name: 'Blue',
        searchTerm: 'u',
      })
    }
    if (colors.includes('B')) {
      result.push({
        name: 'Black',
        searchTerm: 'b',
      })
    }
    if (colors.includes('R')) {
      result.push({
        name: 'Red',
        searchTerm: 'r',
      })
    }
    if (colors.includes('G')) {
      result.push({
        name: 'Green',
        searchTerm: 'g',
      })
    }
  },
  typeParse: (types) => {
    return types
      .split(' ')
      .filter('-')
      .map((type) => {
        return {
          name: type,
          searchTerm: type,
        }
      })
  },
  textParse: (tags, text) => {
    const result = []

    for (let key in tags) {
      const tag = tags[key]
      if (text.match(tag.regex)) result.push(tag)
    }

    return result
  },
}

const colorParse = (colors) => {
  const result = []

  if (colors.includes('W')) {
    result.push({
      name: 'White',
      searchTerm: 'w',
    })
  }
  if (colors.includes('U')) {
    result.push({
      name: 'Blue',
      searchTerm: 'u',
    })
  }
  if (colors.includes('B')) {
    result.push({
      name: 'Black',
      searchTerm: 'b',
    })
  }
  if (colors.includes('R')) {
    result.push({
      name: 'Red',
      searchTerm: 'r',
    })
  }
  if (colors.includes('G')) {
    result.push({
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
        name: type,
        searchTerm: type,
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
      name: keyword,
      searchTerm: keyword,
    }
  })
}
