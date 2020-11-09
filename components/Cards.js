// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardCreator = ({heading, photo, name}) => {
// Creating required card DOM elements
    const card = document.createElement('div')
    const cardHeadLine = document.createElement('div')
    const cardAuthor = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardSpan = document.createElement('span');

// Appending child elements to parent elements
    document.querySelector('.cards-container').appendChild(card)
    card.appendChild(cardHeadLine);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(imgContainer);
    imgContainer.appendChild(cardImg);
    cardAuthor.appendChild(cardSpan)

// Adding class names to elements
    card.classList.add('card');
    cardHeadLine.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

// Adding text to elements
    cardHeadLine.textContent = heading
    cardSpan.textContent = 'By:' + name
    cardImg.src = photo

// Adding eventListener to card
    card.addEventListener('click', () => {
        console.log(cardHeadLine);
    })

    return card; // This will return our new card element
}

console.log(cardCreator({}))


// Using axios.get to send an HTTP GET REQUEST
axios.get('https://lambda-times-api.herokuapp.com/articles')
 .then((response) => {
     console.log(response);
 });