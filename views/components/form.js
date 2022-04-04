module.exports = (
  id,
  url,
  method = 'post',
  formName,
  inputs,
  hidden = false
) => {
  return `
        <form ${hidden ? 'hidden' : ''} id="${id}" action="${url}">
            ${formName ? `<label class="label">${formName}</label>` : ''}
                ${inputs.join('')}
            <button class="button is-link">Submit</button>
        </form>
    `
}
