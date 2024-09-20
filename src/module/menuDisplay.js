import leipajuusto from "../images/leipajuusto.jpg"
import lohikeitto from "../images/lohikeitto.jpg"
import siskonmakkarakeitto from "../images/Siskonmakkarakeitto.jpg"
import riisipuuro from "../images/riisipuuro.jpeg"
import poronkaristys from "../images/poronkaristys.webp"
import kaali from "../images/kaalikaaryleet.jpg"

const arr = [
    ['Leipajuusto', 'Leipäjuusto is a fresh cheese that originates from the Ostrobothnia region in northern Finland, dating back at least 200 years', '10', leipajuusto],
    ['Lohikeitto', 'Lohikeitto is a traditional Finnish salmon soup, The rich flavor of Finnish salmon truly shines in this soup, accompanied by mild spices, making it a delightful Finnish seafood dish.', '15', lohikeitto],
    ['Siskonmakkarakeitto', 'Siskonmakkara is a fresh Finnish pork sausage that is first boiled and then pan-fried with a unique preparation method. It’s known for its tender and delicate meat, offering a distinct taste compared to other sausages you may have tried.', '13', siskonmakkarakeitto],
    ['Riisipuuro','A Finnish rice pudding, is a traditional Scandinavian dish typically served during Christmas. Made from simple ingredients, this warm, creamy rice pudding is a perfect comfort food for those cold autumn or winter days when you’re cozy at home.', '10', riisipuuro],
    ['Poronkaristys', 'Poronkäristys is the national dish of Finland made from cooking reindeer meat. In this dish, thin slices of reindeer meat are usually sautéed in butter, with or without onions, and slowly simmered in beer or meat broth until they become tender and succulent.', '10', poronkaristys],
    ['Kaalikääryleet', 'This dish is popular throughout Europe. This Finnish cabbage roll, also known as kaalikaaryleet, is made with minced meat, rice, cabbage, and minced meat. This dish is a complete meal and can satisfy you completely.', '17', kaali]
]

function menuDisplay(parent) {
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-grid');

    arr.forEach(item => {
        const leipajuusto = createMenuCard(...item);
        menuWrapper.append(leipajuusto)
    }
    )

    parent.append(menuWrapper)
}

function createMenuCard(dish, desc, price, picSrc) {
    const card = document.createElement('div');
    card.classList.add('card');

    const dishPic = document.createElement('img');
    dishPic.classList.add('dish-pic');
    dishPic.src = picSrc

    const dishName = document.createElement('p');
    dishName.classList.add('dish-name');
    dishName.textContent = dish;

    const description = document.createElement('p');
    description.classList.add('desc');
    description.textContent = desc;

    const priceAmount = document.createElement('span');
    priceAmount.classList.add('price');
    priceAmount.textContent = `Price: $${price}`

    const wrapDesc = document.createElement('div');
    wrapDesc.classList.add('desc-wrapper');

    wrapDesc.append(dishName, description, priceAmount)

    card.append(dishPic, wrapDesc);

    return card;
}

export default menuDisplay;