// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  headA = document.createElement("div");
  date = document.createElement("date");
  contentA = document.createElement("h1");
  temp = document.createElement("span");

  headA.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  date.textContent = "MARCH 28, 2019";
  contentA.textContent = "Lambda Times";
  temp.textContent = "98°";

  headA.appendChild(date);
  headA.appendChild(contentA);
  headA.appendChild(temp);

  return headA;
}

let headContainer = document.querySelector(".header-container");
headContainer.appendChild(Header());
