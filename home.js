//Theme Colors
const mainColor = '#f9b623';
const bgColor = '#feebc0';

//Home Main Div Element
const home = document.createElement('div');
home.className = 'home';
home.style.width ='100%';
home.style.backgroundColor = bgColor;
home.style.textAlign='center';
home.style.display = 'flex';

document.body.appendChild(home);
document.body.style.backgroundColor =bgColor;

//Home Inner Div Element
const homeHeadDiv = document.createElement('div');
homeHeadDiv.style.marginLeft = 'auto';
homeHeadDiv.style.marginRight = 'auto';
homeHeadDiv.style.marginTop = '80px';

homeHeadDiv.style.width ='95%';
homeHeadDiv.style.height='200px'
homeHeadDiv.style.backgroundColor = mainColor;
homeHeadDiv.style.borderRadius = '12px';


// Create a div element to wrap the heading text node
const headingWrapper = document.createElement('div');
// Create the text node
const heading = document.createTextNode('Home');
// Append the text node to the heading wrapper
headingWrapper.appendChild(heading);
// Apply marginTop style to the heading wrapper
headingWrapper.style.marginTop = '20px'; // Adjust the value as needed
headingWrapper.style.fontWeight = '600'
headingWrapper.style.fontSize = '1.4rem'
// Append the heading wrapper to the homeHeadDiv or any other parent element
homeHeadDiv.appendChild(headingWrapper);


home.appendChild(homeHeadDiv);
console.warn(home);

