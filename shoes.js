//* Theme Colors
import { themeColors } from "./theme.js";
import { products } from "./products.js";


export const main = document.createElement('main');
document.body.appendChild(main);


//! function to create productsPage
export let productsPage = (tittle) => {

    //!Home Main Div Element
    const home = document.createElement('div');
    home.className = 'home';
    home.style.width = '100%';
    home.style.backgroundColor = themeColors[0];
    home.style.textAlign = 'center';
    //home.style.display = 'flex';

    main.appendChild(home);
    document.body.style.backgroundColor = themeColors[0];

    //!Home Inner Div Element
    const homeHeadDiv = document.createElement('div');
    homeHeadDiv.style.marginLeft = 'auto';
    homeHeadDiv.style.marginRight = 'auto';
    homeHeadDiv.style.marginTop = '80px';
    homeHeadDiv.style.boxShadow = 'var(--shadow-color) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    homeHeadDiv.style.width = '95%';
    homeHeadDiv.style.height = '250px'
    homeHeadDiv.style.backgroundColor = themeColors[1];
    homeHeadDiv.style.borderRadius = '18px';
    homeHeadDiv.className = 'homeHeadContainer';


    //* Create a div element to wrap the heading text node
    const headingWrapper = document.createElement('div');
    //* Create the text node
    const heading = document.createTextNode(tittle);
    //* Append the text node to the heading wrapper
    headingWrapper.appendChild(heading);
    //* Apply marginTop style to the heading wrapper
    headingWrapper.style.paddingTop = '25px';
    headingWrapper.style.fontWeight = '600'
    headingWrapper.style.fontSize = '1.4rem'
    // * Append the heading wrapper to the homeHeadDiv or any other parent element
    homeHeadDiv.appendChild(headingWrapper);
    home.appendChild(homeHeadDiv);

    // !Container Object of Sun and Moon
    const ball = document.createElement('div');
    ball.className = 'sunMoon';
    homeHeadDiv.appendChild(ball);

    ball.style.display = 'none';

    //* Object of Sun and Moon
    const sunMoon = document.querySelector('.sunMoon');
    sunMoon.style.margin = '-30px 0px 20px 20px';
    sunMoon.style.borderRadius = '50%';
    sunMoon.style.width = '70px';
    sunMoon.style.height = '70px';
    sunMoon.style.backgroundColor = 'orange';
    sunMoon.style.boxShadow = '0 0 35px 5px yellow, 0 0 25px 10px yellow inset';

}

export let newProductCardContainer = () => {


    //? ColorIndex to give unique colors to cards
    let color = 5;

    // ! Product Card Container
    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexWrap = 'wrap';
    cardContainer.style.justifyContent = 'space-around'
    cardContainer.style.margin = '-120px auto ';
    cardContainer.style.width = '95%';
    cardContainer.className = 'cardContainer';
    main.appendChild(cardContainer);


    // *function to create new items cards
    let newProduct = () => {

        //* Card Element
        const card = document.createElement('div');
        cardContainer.appendChild(card);

        card.style.width = '280px'; // Set width here
        card.style.height = '300px'; // Set height here
        card.style.backgroundColor = themeColors[3];
        card.style.borderRadius = '20px';
        card.style.cursor = 'pointer';
        card.style.margin = '12px 5px'
        card.className = 'card';
        card.style.position = 'relative';
        card.style.boxShadow = 'var(--shadow-color) 0px 54px 55px, var(--shadow-color) 0px -12px 30px, var(--shadow-color) 0px 4px 6px, var(--shadow-color) 0px 12px 13px, var(--shadow-color) 0px -3px 5px'
        card.style.userSelect = 'none';

        //* card wishlist button
        const wishlistButton = document.createElement('button');
        card.appendChild(wishlistButton);

        const addToCartButton = document.createElement('button');
        card.appendChild(addToCartButton);

        wishlistButton.className = 'card-buttons';
        addToCartButton.className = 'card-buttons';
        
        wishlistButton.style.width = '30px';
        wishlistButton.style.height = '30px';
        wishlistButton.style.borderRadius = '6px';
        wishlistButton.className = '.wishlist-btn';
        wishlistButton.style.backgroundColor = themeColors[1];
        wishlistButton.style.marginLeft = '230px';
        wishlistButton.style.marginTop = '10px';
        wishlistButton.style.position = 'absolute';


        addToCartButton.style.width = '30px';
        addToCartButton.style.height = '30px';
        addToCartButton.style.borderRadius = '6px';
        addToCartButton.className = '.wishlist-btn';
        addToCartButton.style.backgroundColor = themeColors[1];
        addToCartButton.style.marginLeft = '190px';
        addToCartButton.style.marginTop = '10px';
        addToCartButton.style.position = 'absolute';

        var icon = document.createElement('i');
        wishlistButton.appendChild(icon);

        icon.className = 'fa-solid fa-heart';
        //* Set styles for the icon
        icon.style.display = 'flex'
        icon.style.justifyContent = 'center'
        icon.style.fontSize = '1.2rem'

        //* card InnerDiv Rectangle
        const cardInnerDivBG = document.createElement('div');
        // Append the new rectangular div element to the card
        card.appendChild(cardInnerDivBG);
        // Set the width and height of the new div element
        cardInnerDivBG.style.width = '84%';
        cardInnerDivBG.style.borderRadius = '12px';
        cardInnerDivBG.style.height = '100px';
        cardInnerDivBG.style.margin = '25% auto'
        // Set the class name of the new div element
        cardInnerDivBG.className = 'cardInnerBG';
        // Set the background color of the new div element
        cardInnerDivBG.style.backgroundColor = themeColors[color];
        //cardInnerDivBG.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';

        //* Card InnerDiv Circle
        const cardInnerCircleBG = document.createElement('div');
        cardInnerDivBG.appendChild(cardInnerCircleBG);
        // Set the class name of the new div element
        cardInnerCircleBG.className = 'cardInnerCircle';
        // Set the background color of the new div element
        cardInnerCircleBG.style.backgroundColor = themeColors[1];
        cardInnerCircleBG.style.width = '96px';
        cardInnerCircleBG.style.height = '96px';
        cardInnerCircleBG.style.borderRadius = '50%';
        cardInnerCircleBG.style.margin = 'auto';
        cardInnerCircleBG.style.border = '2px solid white';

        //* Card Image Element

        const productImage = document.createElement('img');
        card.appendChild(productImage);
        productImage.className = 'productImage';
        productImage.style.position = 'absolute';
        productImage.src = products[id].img;
        productImage.style.width = '75%';
        productImage.style.top = '30%'
        productImage.style.left = '10%'
        productImage.style.filter = 'drop-shadow(#000000 0.5rem 0.5rem 1rem)';
        productImage.style.transform = 'rotate(-25deg)';


        // * Give Colors to cardsInner BG 
        if (color <= 8) {
            color++;
        }
        else {
            color = 5;
        }



        const productTittleContainer = document.createElement('div');
        const productPriceContainer = document.createElement('div');

        productTittleContainer.className = 'productTittle';
        productPriceContainer.className = 'productPrice';


        const productTittle = document.createTextNode(products[id].tittle);
        const productPrice = document.createTextNode(products[id].price);

        productTittleContainer.style.fontWeight = '800';
        productTittleContainer.style.color = themeColors[6];
        productPriceContainer.style.color = themeColors[6];

        productTittleContainer.style.marginLeft = '110px';
        productPriceContainer.style.marginLeft = '115px';



        productTittleContainer.appendChild(productTittle);
        productPriceContainer.appendChild(productPrice);


        // TODO: Append the text node to the heading wrapper
        card.appendChild(productTittleContainer);
        card.appendChild(productPriceContainer);


    }


    let id;
    for (let i = 0; i < products.length; i++) {
        id = i;
        newProduct()
    }

}
