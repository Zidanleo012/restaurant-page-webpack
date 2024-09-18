import images from "./images/master-chef-modified.png"
import award1 from "./images/award-1.png"
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

function awardsSection() {
    const awardWrapper = document.createElement('div');
    awardWrapper.classList.add('award-wrapper');

    const awardOne = document.createElement('img');
    awardOne.classList.add('award-picture')
    awardOne.src = award1;

    awardWrapper.append(awardOne)

    content.appendChild(awardWrapper);
}

homePage()
awardsSection()
// test