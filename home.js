//Theme Colors
const mainColor = '#f9b623';
const bgColor = '#feebc0';
const cardBgColor = '#ffefe5';
const themeColor4 = '#088de7';

//Home Main Div Element
const home = document.createElement('div');
home.className = 'home';
home.style.width = '100%';
home.style.backgroundColor = bgColor;
home.style.textAlign = 'center';
//home.style.display = 'flex';

document.body.appendChild(home);
document.body.style.backgroundColor = bgColor;

//Home Inner Div Element
const homeHeadDiv = document.createElement('div');
homeHeadDiv.style.marginLeft = 'auto';
homeHeadDiv.style.marginRight = 'auto';
homeHeadDiv.style.marginTop = '80px';

homeHeadDiv.style.width = '95%';
homeHeadDiv.style.height = '250px'
homeHeadDiv.style.backgroundColor = mainColor;
homeHeadDiv.style.borderRadius = '12px';
homeHeadDiv.className = 'homeHeadContainer';


// Create a div element to wrap the heading text node
const headingWrapper = document.createElement('div');
// Create the text node
const heading = document.createTextNode('Home');
// Append the text node to the heading wrapper
headingWrapper.appendChild(heading);
// Apply marginTop style to the heading wrapper
headingWrapper.style.paddingTop = '25px'; // Adjust the value as needed
headingWrapper.style.fontWeight = '600'
headingWrapper.style.fontSize = '1.4rem'
// * Append the heading wrapper to the homeHeadDiv or any other parent element
homeHeadDiv.appendChild(headingWrapper);
home.appendChild(homeHeadDiv);

// TODO Object of Sun and Moon
const ball = document.createElement('div');
ball.className = 'sunMoon';
homeHeadDiv.appendChild(ball);


const sunMoon = document.querySelector('.sunMoon');
sunMoon.style.margin = '-30px 0px 20px 20px';
sunMoon.style.borderRadius = '50%';
sunMoon.style.width = '70px';
sunMoon.style.height = '70px';
sunMoon.style.backgroundColor = 'orange';
sunMoon.style.boxShadow = '0 0 35px 5px yellow, 0 0 25px 10px yellow inset';


createCards(6)


// *function to creat items cards
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
        card.style.width = '220px'; // Set width here
        card.style.height = '280px'; // Set height here
        card.style.backgroundColor = cardBgColor;
        card.style.borderRadius = '12px'
        card.style.margin = '12px 5px'
        card.className = 'card';

        const cardInnerDivBG = document.createElement('div');
        cardInnerDivBG.className = 'cardInnerBG';
        cardInnerDivBG.backgroundColor= themeColor4;
        cardInnerDivBG.style.width = '80%'
        cardInnerDivBG.style.height='50px'

        card.appendChild(cardInnerDivBG);

        cardContainer.appendChild(card);
        const heading = document.createTextNode('Card');

        // TODO: Append the text node to the heading wrapper
        card.appendChild(heading);
    }
}


console.warn(home);

