const storedTags = require('../../tag')

module.exports = () => {
  const descriptionsArray = []

  for (let key in storedTags) {
    descriptionsArray.push(
      `<p>${storedTags[key].name} - ${storedTags[key].description}</p>`
    )
  }

  const joinedDescriptions = descriptionsArray.join('')

  return `
        <p class="is-size-4">Syntax</p>
        <br>
        <p>
        This site uses <a href="https://scryfall.com/docs/syntax">Scryfall's full text search syntax.</a> 
        This is supported within the searchbars on the homepage and navbar as well as the name field on the search page.
        </p>
        <br>
      
        <p class="is-size-4">Tags</p>
        <br>
        <p>
        Selecting a card from the card results will show that indivdual card along with tags relevant to its oracle text.
        Selecting those tags and then submitting with perform a follow up search based on those tags.
        </p>
        <br>
        ${joinedDescriptions}
    `
}
