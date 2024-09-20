import images from "./images/master-chef-modified.png"
import awardDisplay from "./module/awardsDisplay.js"
import menuDisplay from "./module/menuDisplay.js"
import "./styles.css"


const content = document.querySelector('#content')

function homePage() {
    const logoWrapper = document.createElement('div')
    logoWrapper.classList.add('logo-wrapper')

    const logo = document.createElement('img');
    logo.classList.add('logo')
    logo.src = images;

    const brandAndText = document.createElement('div');
    brandAndText.classList.add('brand-and-text');

    const h1 = document.createElement('h1');
    h1.classList.add('name-brand')
    h1.textContent = "MasterChef Restaurant"

    const brandText = document.createElement('p');
    brandText.classList.add('brand-text');
    brandText.textContent = "The best food served by The best Chefs!"

    brandAndText.append(h1, brandText)
    logoWrapper.append(logo, brandAndText)

    content.appendChild(logoWrapper)
}

// homePage()
// awardDisplay(content)
menuDisplay(content)
// test