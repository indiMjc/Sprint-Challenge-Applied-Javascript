// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//      <div class="author">
//          <div class="img-container">
//              <img src={url of authors image} />
//          </div>
//          <span>By {authors name}</span>
//      </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let article = response.data.articles;
    console.log(article);
    cardContainer.appendChild(CardMaker(article.bootstrap));
    cardContainer.appendChild(CardMaker(article.javascript));
    cardContainer.appendChild(CardMaker(article.jquery));
    cardContainer.appendChild(CardMaker(article.node));
    cardContainer.appendChild(CardMaker(article.technology));
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

function CardMaker(subject) {
  //create
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let authorContainer = document.createElement("div");
  let imgContainer = document.createElement("div");
  let image = document.createElement("img");
  let authorName = document.createElement("span");
  //classes
  card.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");
  //populate
  headline.textContent = subject.headline;
  image.src = subject.authorPhoto;
  authorName.textContent = subject.authorName;
  //structure
  card.appendChild(headline);
  headline.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorContainer.appendChild(authorName);

  return card;
}
