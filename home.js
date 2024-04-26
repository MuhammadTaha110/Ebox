const mainColor = '#f9b623';
const bgColor = '#feebc0';

//Home Main Div Element
const home = document.createElement('div');
home.className = 'home';
home.style.width ='100%';
home.style.backgroundColor = bgColor;
home.style.textAlign='center';

document.body.appendChild(home);
document.body.style.backgroundColor =bgColor;

//Home Inner Div Element
const homeHeadDiv = document.createElement('div');
homeHeadDiv.style.marginLeft = 'auto';
homeHeadDiv.style.marginRight = 'auto';
homeHeadDiv.style.width ='80%';
homeHeadDiv.style.height='200px'
homeHeadDiv.style.backgroundColor = mainColor;
homeHeadDiv.style.borderRadius = '12px';

//Home Inner Div Heading Element
const heading = document.createTextNode('Home');
homeHeadDiv.appendChild(heading);

home.appendChild(homeHeadDiv);

console.warn(home);

