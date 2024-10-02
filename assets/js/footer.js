class FooterDown extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const style = document.createElement('style');
        // Include the Font Awesome CSS directly
        style.textContent = `@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');`
            + `
        .footer_container {
            /* position: fixed; */
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #2B6CB0;
            color: white;
            text-align: center;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
        }
        
        .footer_left{
            font-family: "Berkshire Swash", serif !important;
            font-size: 40px;
            font-style: normal;
        }
        
        .footer_left img{
            height: 52px;
        }
        
        .footer_left a{
            text-decoration: none;
            color: #fff;
        }
        
        .footer_f_right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: justify;
        }
        
        .footer_f_right a{
            text-decoration: none;
            color: #fff;
            padding: 5px;
        }
        
        .footer_f_right  :hover{
            color: #E53E3E;
        }

        .f_logo{
            display: flex;
        }

        .y{
            color: #ae172d;
        }

        @media screen and (max-width: 400px){
            .footer_left{
                font-size: 20px;
            }

            .footer_left img{
                height: 26px;
            }

            .footer_f_right a{
                font-size: 12px;
                padding: 0;
            }
        }
        `;
        this.shadowRoot.append(style);

        const html = `
        <div class="footer_container">
            <div class="footer_left" id="footer_left">
                <a href="#" class="f_logo">
                    <img id="footerLogo" src="" alt="nerdYbook logo"> &nbsp;nerd<span class="y">Y</span>book
                </a>
            </div>

            <div class="footer_f_right" id="footer_f_right">
                <a href="python/intro.html"><i class="fa-brands fa-python"></i> Python</a>
                <a href="sql/intro.html"><i class="fa-solid fa-database"></i> SQL</a>
                <a href="cysec/intro.html"><i class="fa-solid fa-shield"></i> Cyber Security</a>
                <a href="dsa/intro.html"><i class="fa-solid fa-gears"></i> DSA</a>
                <a href="seedlabs/intro.html"><i class="fa-solid fa-flask-vial"></i> Seed Labs</a>
            </div>
        </div>
        `;
        this.shadowRoot.innerHTML += html;

        this.setLogoPathAndNavLinks();
    }

    setLogoPathAndNavLinks() {
        const isGitHubPages = window.location.hostname.includes('github.io');
        // Assuming the site is hosted at '/nerdybook/' on GitHub Pages
        const basePath = isGitHubPages ? '/nerdybook/' : '/';
    
        // Set the logo image path
        const logoImage = this.shadowRoot.querySelector('#footerLogo');
        logoImage.src = `${basePath}assets/images/logo/LTS2_favicon.png`;
    
        // Update the href for the logo link
        const logoLink = this.shadowRoot.querySelector('.f_logo');
        logoLink.href = `${basePath}`;
    
        // Adjust navigation links
        const navLinks = this.shadowRoot.querySelectorAll('.footer_f_right a');
        navLinks.forEach(link => {
            let hrefValue = link.getAttribute('href');
            // If hrefValue is a relative path, adjust it
            if (hrefValue && !hrefValue.startsWith('http')) {
                // Ensure hrefValue does not start with '/'
                hrefValue = hrefValue.replace(/^\//, '');
                // Concatenate basePath with the adjusted hrefValue
                link.setAttribute('href', `${basePath}${hrefValue}`);
            }
        });
    }
    


}
customElements.define('footer-down', FooterDown);
