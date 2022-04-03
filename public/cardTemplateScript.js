const tagContainer = document.querySelector('#tag-container')
const form = document.querySelector('#tag-form')
const buttons = tagContainer.querySelectorAll('button')

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    const tagType = e.target.attributes.tagType.value
    const searchTerm = e.target.attributes.searchTerm.value
    const query = `input[name="${tagType}"]`
    const input = form.querySelector(query)

    input.value += searchTerm
    button.classList.add('is-active')
    button.classList.add('is-primary')
  })
)
