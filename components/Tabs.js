// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabCreator = (data) => {
    // Create div element 
    const tabCreator = document.createElement('div');

    // Adding class name to new element
    tabCreator.classList.add('tab')

    // Adding text to the tab div
    tabCreator.textContent = data

    return tabCreator;
}

// console.log(tabCreator())

const entryPoint = document.querySelector('.topics');

axios.get('https://lambda-times-api.herokuapp.com/topics')
 .then((successResponse) => {
    console.log(successResponse);
    successResponse.data.topics.forEach(item => {
        const newTab = tabCreator(item);
        entryPoint.appendChild(newTab)
    })
});

