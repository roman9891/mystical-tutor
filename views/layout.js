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
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nw9e8HEYwBM18_Y_kNoM_CZtogqslCP-Mg&usqp=CAU" width="28" height="28">
                        </a>
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href="/search">
                                Search
                            </a>
                    
                            <a class="navbar-item" href="/docs">
                                Documentation
                            </a>
                    
                            <a class="navbar-item" href="/about">
                                About
                            </a>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <form method="post" action="/search">
                                <input type="text">
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </nav>
                ${content}    
            </body>
        </html>
    `
}
