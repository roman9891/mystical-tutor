module.exports = (id, url, method = 'post', formName, inputs) => {
  return `
        <form id="${id}" action="${url}">
            <label class="label">${formName}</label>
                ${inputs.join('')}
            <button class="button is-link">Submit</button>
        </form>
    `
}
