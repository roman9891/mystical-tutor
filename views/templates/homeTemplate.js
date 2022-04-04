const form = require('../components/form')
const { textInput } = require('../components/input')

const inputs = [textInput('name', '', 'search by name')]
const imageAddress =
  'https://cdn.inprnt.com/thumbs/8e/c3/8ec322464c1ccad00a35731195babf8f.jpg?response-cache-control=max-age=2628000'

module.exports = () => {
  return `
        <div class="columns is-centered has-text-centered is-vcentered">
            <div class="column is-two-thirds">
                <img src="${imageAddress}"/>
                Search up your favorite magic cards and discover synergies by following up with related searches
                ${form('nav-form', '/cards', 'get', '', inputs)}
            </div>
        </div>
    `
}
