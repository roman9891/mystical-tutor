const navbar = require('./components/navbar')

const brandIcon =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nw9e8HEYwBM18_Y_kNoM_CZtogqslCP-Mg&usqp=CAU'

module.exports = (content) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mystical Tutor</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
            </head>
            <body>
                ${navbar(brandIcon)}
                <div class="has-text-white">SPACE</div>
                <div class="columns is-centered">
                    <div class="column is-two-thirds">${content}</div>    
                </div>   
                <script src="/navbarScript.js"></script>
            </body>
        </html>
    `
}
