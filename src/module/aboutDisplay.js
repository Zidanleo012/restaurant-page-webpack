function displayAbout(parent) {
    const aboutWrapper = document.createElement('about-wrapper');
    aboutWrapper.classList.add('about-wrapper');

    const aboutFlex = document.createElement('div');
    aboutFlex.classList.add('about-flex');

    const aboutUs = document.createElement('p');
    aboutUs.classList.add('about-us');
    aboutUs.textContent = 'About Us';

    const headChef = makeElement('Zidan', 'Head Chef', '+62895422005858', 'gugugaga@cmail.com');
    const manager = makeElement('Andri', 'Manager', '+6281387881232', 'arrrrgh@cmail.com');
    const waiter = makeElement('Agus', 'Waiter', '+6271826464728', 'oongkn@gmail.com');

    aboutWrapper.append(aboutUs, headChef, manager, waiter);
    aboutFlex.appendChild(aboutWrapper)
    parent.appendChild(aboutFlex);

}

function makeElement(name, title, number, email) {
    const cardAbout = document.createElement('div');
    cardAbout.classList.add('card-about');

    for (let key in arguments) {
        const item = document.createElement('p');
        item.classList.add('contact-item');
        item.textContent = `${arguments[key]}`
        cardAbout.appendChild(item)
    }
    return cardAbout;
}

export default displayAbout;