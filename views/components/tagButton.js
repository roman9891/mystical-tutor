module.exports = (tag) => {
  return `<button class="button" searchTerm="${tag.searchTerm}" tagType="${tag.type}">${tag.name}</button>`
}
