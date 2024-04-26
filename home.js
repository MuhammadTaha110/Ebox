//Theme Colors
const mainColor = '#f9b623';
const bgColor = '#feebc0';
const cardBgColor = '#ffefe5';

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
headingWrapper.style.marginTop = '12px'; // Adjust the value as needed
headingWrapper.style.fontWeight = '600'
headingWrapper.style.fontSize = '1.4rem'
// Append the heading wrapper to the homeHeadDiv or any other parent element
homeHeadDiv.appendChild(headingWrapper);
home.appendChild(homeHeadDiv);

creatCards(5)

function creatCards(cardsQuantity) {
    for (let i = 0; i < cardsQuantity; i++) {
        const cardContainer = document.createElement('div');
        cardContainer.style.display = 'flex';
        
        home.appendChild(cardContainer);
        cardContainer.className = 'cardContainer';

        const card = document.createElement('div');
        card.style.width = '30%';
        card.style.width = '80px';
        card.style.backgroundColor = cardBgColor;

        cardContainer.appendChild(card);
        card.className = 'card';
        const heading = document.createTextNode('Card');
        // Append the text node to the heading wrapper
        card.appendChild(heading);
    }

   

}


console.warn(home);

