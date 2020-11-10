// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
// Creating required elements
    const header = document.createElement('div');
    const spanOne = document.createElement('span');
    const spanTwo = document.createElement('span')
    const hOne = document.createElement('h1');

// Add required class names 
    header.classList.add('header');
    spanOne.classList.add('date');
    spanTwo.classList.add('temp');

// Adding text
    spanOne.textContent = 'MARCH 28, 2020'
    hOne.textContent = 'Lambda Times'
    spanTwo.textContent = '98°'

// Appending children elements to parent element
    document.querySelector('.header-container').appendChild(header);
    header.appendChild(spanOne);
    header.appendChild(hOne);
    header.appendChild(spanTwo);

 return header;
    
}
Header();