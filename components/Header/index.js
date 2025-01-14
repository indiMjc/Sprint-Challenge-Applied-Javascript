// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//grab parent
const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());

function Header() {
  //create
  const newHeader = document.createElement("div"),
    newDate = document.createElement("span"),
    newTitle = document.createElement("h1"),
    newTemp = document.createElement("span");
  //classes
  newHeader.classList.add("header");
  newDate.classList.add("date");
  //populate
  newDate.textContent = "SMARCH 28, 2019";
  newTitle.textContent = "Lambda Times";
  newTemp.textContent = "98°";
  //structure
  newHeader.appendChild(newDate);
  newHeader.appendChild(newTitle);
  newHeader.appendChild(newTemp);

  return newHeader;
}
