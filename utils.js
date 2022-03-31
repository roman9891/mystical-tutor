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
}
