import award1 from "../images/award-1.0.png"
import award2 from "../images/award-2.png"
import award3 from "../images/award-3.1.png"
import award4 from "../images/award-4.png"
import award5 from "../images/award-5.webp"


function awardsSection(parent) {
    const awardWrapper = document.createElement('div');
    awardWrapper.classList.add('award-wrapper');

    const awardOne = makeElementAward(award1);
    const awardTwo = makeElementAward(award2);
    const awardThree = makeElementAward(award3);
    const awardFour = makeElementAward(award4);
    const awardFive = makeElementAward(award5);

    awardWrapper.append(awardOne, awardTwo, awardThree, awardFour,awardFive);

    parent.appendChild(awardWrapper)
}

function makeElementAward(src) {
    const item = document.createElement('img');
    item.classList.add('award-picture');
    item.src = src;

    return item;
}

export default awardsSection;

