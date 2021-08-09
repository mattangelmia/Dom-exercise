const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const content = document.querySelector(".content");
const firstParagraph = document.createElement("p");
const firstHeader = document.createElement("h3");
const newDiv = document.createElement("div");
const divHeader = document.createElement("h1");
const divPara = document.createElement("p");
const buttons = document.querySelectorAll("button");

firstHeader.style.color = "blue";
firstHeader.textContent = "I’m a blue h3!";
firstParagraph.style.color = "red";
firstParagraph.textContent = "Hey I’m red!";
newDiv.style.border = "4px solid black";
divHeader.textContent = "I’m in a div";
divHeader.style.backgroundColor = "pink";
divPara.textContent = "ME TOO";

console.log(newDiv);

content.appendChild(firstParagraph);
content.appendChild(firstHeader);
container.appendChild(newDiv);
newDiv.appendChild(divHeader);
newDiv.appendChild(divPara);

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
