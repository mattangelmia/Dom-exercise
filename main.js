// const container = document.querySelector("#container");
// const btn = document.querySelector("#btn");
// const content = document.querySelector(".content");
// const firstParagraph = document.createElement("p");
// const firstHeader = document.createElement("h3");
// const newDiv = document.createElement("div");
// const divHeader = document.createElement("h1");
// const divPara = document.createElement("p");
// const buttons = document.querySelectorAll("button");

// firstHeader.style.color = "blue";
// firstHeader.textContent = "I’m a blue h3!";
// firstParagraph.style.color = "red";
// firstParagraph.textContent = "Hey I’m red!";
// newDiv.style.border = "4px solid black";
// divHeader.textContent = "I’m in a div";
// divHeader.style.backgroundColor = "pink";
// divPara.textContent = "ME TOO";

// console.log(newDiv);

// content.appendChild(firstParagraph);
// content.appendChild(firstHeader);
// container.appendChild(newDiv);
// newDiv.appendChild(divHeader);
// newDiv.appendChild(divPara);

// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });

// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });
console.log("hello");
const form = document.querySelector("#addForm");

const itemList = document.querySelector("#items");

itemList.addEventListener("click", removeItem);

console.log(itemList);

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  console.log(1);
  // get input value
  const newItem = document.getElementById("item").value;
  console.log(newItem);
  // create a new li element  in the list of todos
  let li = document.createElement("li");
  li.className = "list-group-item";
  console.log(li);
  // add text node with value from submit input
  li.appendChild(document.createTextNode(newItem));
  // create delete button getElementById
  let deleteBtn = document.createElement("button");
  // add classes to delete buttons
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  // append button to li
  li.appendChild(deleteBtn);
  // append li to list
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    console.log(1);
    let li = e.target.parentElement;
    console.log(li);
    itemList.removeChild(li);
  }
}
