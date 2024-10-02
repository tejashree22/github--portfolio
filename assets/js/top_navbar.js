class TopNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        // Include the Font Awesome CSS directly
        style.textContent = `@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');`
            + `
            .top_nav_container{
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 3;
            }

            .top_f_navbar {
                // top: 0;
                // position: fixed;
                text-decoration: none;
                background-color: #fff;
                width: 100%;
                height: 2rem;
                padding: 10px;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                display: flex;
                justify-content: space-around;
            }
            
            .top_f_navbar a {
                text-decoration: none;
                color: #000;
            }
            
            .logo{
                display: flex;
            }
            
            .logo,
            .portfolio {
                font-family: "Berkshire Swash", serif !important;
                font-size: 20px;
                font-style: normal;
            }
            
            .logo img {
                height: 30px;
            }
            
            .top_s_navbar {
                // position: fixed;
                text-decoration: none;
                background-color: #000;
                width: 100%;
                height: 1rem;
                padding: 10px 1vw;
                display: flex;
                letter-spacing: 1px;
                overflow-x: auto;
                justify-content: space-around;
                white-space: nowrap;
            }
            
            .top_s_navbar a {
                text-decoration: none;
                color: #efefef;
                width: auto;
                height: 100%;
                // display: flex;
                text-align: center;
                font-size: 12px;
                
            }
            
            .top_s_navbar :hover {
                border-radius: 5px;
                color: #E53E3E;
            }

            .y{
                color: #ae172d;
            }

            /* Hide scrollbar for Chrome, Safari and Opera */
            .top_s_navbar::-webkit-scrollbar {
                display: none;
            }

            /* Hide scrollbar for IE, Edge, and Firefox */
            .top_s_navbar {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }

            @media screen and (max-width: 400px){
                .top_s_navbar{
                    justify-content: flex-start;
                }

                .top_s_navbar a{
                    display: inline-block;
                    width: auto;
                    margin: 0!important;
                    padding: 5px 15px 5px 15px !important;
                    font-size: 10px!important;
                    text-decoration: none;
                    line-height: 1;
                }
            }
        `;
        this.shadowRoot.append(style);

        const html = `
        <div class="top_nav_container">
            <div class="top_f_navbar" id="top_f_navbar">
                <a href="#" class="logo">
                    <img id="navbarLogo" src="" alt="nerdYbook logo"> &nbsp; nerd<span class="y">Y</span>book
                </a>
                <a href="https://srinikhil0.github.io/sri/" class="portfolio" target="_blank"><i class="fa-solid fa-briefcase"></i> Portfolio</a>
            </div>
                <div class="top_s_navbar" id="top_s_navbar">
                    <a href="python/intro.html"><i class="fa-brands fa-python"></i> Python</a>
                    <a href="sql/intro.html"><i class="fa-solid fa-database"></i> SQL</a>
                    <a href="cysec/intro.html"><i class="fa-solid fa-shield"></i> Cyber Security</a>
                    <a href="dsa/intro.html"><i class="fa-solid fa-gears"></i> DSA</a>
                    <a href="seedlabs/intro.html"><i class="fa-solid fa-flask-vial"></i> Seed Labs</a>
                </div>
            </div>
        `;
        this.shadowRoot.innerHTML += html;

        this.setLogoPath();
    }

    setLogoPath() {
        const logoImage = this.shadowRoot.querySelector('#navbarLogo');
        // Base path for GitHub Pages deployment
        const isGitHubPages = window.location.hostname.includes('github.io');
        const basePath = isGitHubPages ? '/nerdybook/' : '/';

    
        // Correctly set the logo image path
        logoImage.src = `${basePath}assets/images/logo/LTS2_favicon.png`;
        const logoLink = this.shadowRoot.querySelector('.logo');
        logoLink.href = `${basePath}index.html`;
    
        // Adjust navigation links
        const navLinks = this.shadowRoot.querySelectorAll('.top_s_navbar a');
        navLinks.forEach(link => {
            const hrefValue = link.getAttribute('href');
            if (hrefValue && !hrefValue.startsWith('http')) {
                // Ensure href values are correctly prefixed with the base path
                // This assumes hrefValue already starts with a '/'
                link.setAttribute('href', `${basePath}${hrefValue}`);
            }
        });
    }
    
    
    
}
customElements.define('top-navbar', TopNavbar);
