module.exports = {
  textInput: (name, label, placeholder) => {
    return `
            <div class="field">
                ${label ? `<label class="label">${label}</label>` : ''}
                <div class="control">
                    <input class="input" type="text" name="${name}" placeholder="${placeholder}">
                </div>
            </div>
        `
  },
  dropdownInput: (name, label, options) => {
    const renderOptions = (options) =>
      options
        .map((option) => `<option value="${option}">${option}</option>`)
        .join('')

    return `
        <div class="field">
            ${label ? `<label class="label">${label}</label>` : ''}
            <div class="control">
                <div class="select">
                    <select name="${name}">
                        ${renderOptions(options)}
                    </select>
                </div>
            </div>
        </div>
      `
  },
  checkbox: (name, label) => {
    return `
        <label class="checkbox">
            <input type="checkbox" name="${name}">
            ${label}
        </label>
      `
  },
}
