class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="./index.html">
            <img src="https://img.freepik.com/free-vector/coffee-shop-logo-food-business-template-branding-design-vector-espresso-yourself-text_53876-136278.jpg?t=st=1654909900~exp=1654910500~hmac=fc2e56eb393523ad8e1a12f34e46cbb5fcc712c7fdf99305f70e99ab86f032ac&w=740"
                width="100" alt="coffee time logo" class="d-inline-block align-top mx-4">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="navbar-item active px-4">
                    <a class="navbar-link" href="./index.html">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="navbar-item px-4">
                    <a class="navbar-link" href="./about.html">ABOUT US</a>
                </li>
                <li class="navbar-item px-4">
                    <a class="navbar-link" href="./contact.html">CONTACT</a>
                </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <section class="footer text-center" style="background-color: rgb(107, 93, 82);">
            <ul style="list-style-type: none">
                <li class="p-2">We would love to hear from you!</li>
                <li class="p-2">Band: Coffee Time</li>
                <li class="p-2">Hotline: 3500 7164</li>
                <li class="p-2">Office Hours:</li>
                <li class="p-2">Monday to Friday, 9:00 AM - 6:00 PM, (excluding Saturdays, Sundays and public
                    holidays)</li>
                <li class="p-2">Address</li>
                <li class="p-2">Unit 03, 7/F, Millennium Trade Centre, 56 Kwai Cheong Road, Kwai Chung, NT</li>
                <li class="p-2">
                    <i class="fa fa-instagram px-3" style="font-size: 20px;"></i>
                    <i class="fa fa-facebook px-3" style="font-size: 20px;"></i>
                    <i class="fa fa-twitter px-3" style="font-size: 20px;"></i>
                </li>
                <li class="p-2">Copyright <span style="font-size: 20px;">&copy;</span> 2022</li>
            </ul>
        </section>
    </footer>
        `
    }
}

customElements.define("app-navbar", Navbar);
customElements.define("app-footer", Footer);