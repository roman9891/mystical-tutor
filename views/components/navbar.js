const form = require('./form')

module.exports = (brandIcon) => {
  return `
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="${brandIcon}" width="28" height="28">
            </a>
            <a id="navbar-burger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar-menu" class="navbar-menu">
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
                <form method="get" action="/cards">
                    <input name="name" type="text">
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </nav>
    `
}

// ${form('nav-form', '/cards', 'get', '', inputs)}
