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
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Content(article, key) {
  card = document.createElement("div");
  headline = document.createElement("div");
  author = document.createElement("div");
  imgContainer = document.createElement("div");
  authorImg = document.createElement("img");
  authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorImg);
  author.appendChild(authorName);

  return card;
}

cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let keys = Object.keys(response.data.articles);

    keys.forEach(key =>
      response.data.articles[`${key}`].forEach(article =>
        cardContainer.append(Content(article, key))
      )
    );
  })
  .catch(error => {
    console.log("error", error);
  });
