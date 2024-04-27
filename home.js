//* Theme Colors
import { themeColors } from "./theme.js";
//? ColorIndex to give unique colors to cards
let color = 5


//!Home Main Div Element
const home = document.createElement('div');
home.className = 'home';
home.style.width = '100%';
home.style.backgroundColor = themeColors[0];
home.style.textAlign = 'center';
//home.style.display = 'flex';

document.body.appendChild(home);
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
homeHeadDiv.style.borderRadius = '12px';
homeHeadDiv.className = 'homeHeadContainer';


//* Create a div element to wrap the heading text node
const headingWrapper = document.createElement('div');
//* Create the text node
const heading = document.createTextNode('Home');
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

//* Object of Sun and Moon
const sunMoon = document.querySelector('.sunMoon');
sunMoon.style.margin = '-30px 0px 20px 20px';
sunMoon.style.borderRadius = '50%';
sunMoon.style.width = '70px';
sunMoon.style.height = '70px';
sunMoon.style.backgroundColor = 'orange';
sunMoon.style.boxShadow = '0 0 35px 5px yellow, 0 0 25px 10px yellow inset';




createCards(16)


// *function to create new items cards
function createCards(cardsQuantity) {

    const cardContainer = document.createElement('div');
    cardContainer.style.display = 'flex';
    cardContainer.style.flexWrap = 'wrap';
    cardContainer.style.justifyContent = 'space-around'
    cardContainer.style.margin = '-120px auto ';
    cardContainer.style.width = '95%';
    //cardContainer.style.backgroundColor = 'pink'
    home.appendChild(cardContainer);

    for (let i = 0; i < cardsQuantity; i++) {

        cardContainer.className = 'cardContainer';

        //* Card Element
        const card = document.createElement('div');
        card.style.width = '260px'; // Set width here
        card.style.height = '280px'; // Set height here

        const randomNumber = Math.random();

        // Scale the random number to fit the range [5, 8]
        //const cardBg = Math.floor(randomNumber * 4) + 5;


        card.style.backgroundColor = themeColors[3];
        card.style.borderRadius = '12px'
        card.style.margin = '12px 5px'
        card.className = 'card';
        card.style.boxShadow = 'var(--shadow-color) 0px 54px 55px, var(--shadow-color) 0px -12px 30px, var(--shadow-color) 0px 4px 6px, var(--shadow-color) 0px 12px 13px, var(--shadow-color) 0px -3px 5px'

        const cardInnerDivBG = document.createElement('div');

        // Set the class name of the new div element
        cardInnerDivBG.className = 'cardInnerBG';

        
      
        // Set the background color of the new div element
        cardInnerDivBG.style.backgroundColor = themeColors[color];

            // * Give Colors to cardsInner BG 
            if(color<=8){
                color++;
            }
            else{
                color=5;
            }
        
    
        // Set the width and height of the new div element
        cardInnerDivBG.style.width = '84%';
        cardInnerDivBG.style.borderRadius = '12px';
        cardInnerDivBG.style.height = '100px';
        cardInnerDivBG.style.margin = '25% auto'



        // Append the new div element to the card
        card.appendChild(cardInnerDivBG);

        cardContainer.appendChild(card);

        const productTittleContainer = document.createElement('div');
        const productPriceContainer = document.createElement('div');

        productTittleContainer.className = 'productTittle';
        productPriceContainer.className = 'productPrice';


        const productTittle = document.createTextNode('Nike AirMax');
        const productPrice = document.createTextNode('$44.26');


        productTittleContainer.appendChild(productTittle);
        productPriceContainer.appendChild(productPrice);


        // TODO: Append the text node to the heading wrapper

        card.appendChild(productTittleContainer);
        card.appendChild(productPriceContainer);


    }
}


console.warn(home);

