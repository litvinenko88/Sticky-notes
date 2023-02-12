document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".conteiner-textarea").classList.add("hidden");
});

document.querySelector(".add").addEventListener("click", function () {
  document.querySelector(".conteiner-textarea").classList.remove("hidden");
});

let containerCard = document.querySelector(".container-card");
containerCard.innerHTML = "";
let sendBtn = document.querySelector(".send");
let card = document.querySelector(".card");

function rotate() {
  let randomRotate = [
    "rotate(4deg)",
    "rotate(-4deg)",
    "rotate(1deg)",
    "rotate(6deg)",
    "rotate(-6deg)",
    "rotate(-1deg)",
    "rotate(3deg)",
    "rotate(-3deg)",
  ];

  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function colorCard() {
  let randomColor = [
    "#2aaf3a",
    "#cded15",
    "#ed6f15",
    "#15edb7",
    "#3f55ad",
    "#ad3fa4",
    "#a2103f",
    "#ab041a",
    "#ddbdce",
    "#03e607",
  ];

  return randomColor[Math.floor(Math.random() * randomColor.length)];
}

function send() {
  let input = document.querySelector("input");
  let nodediv = document.createElement("div");
  let nodeP = document.createElement("p");

  if (input.value && input.value.length <= 40) {
    nodediv.setAttribute("class", "card");
    nodeP.setAttribute("class", "text-p");

    nodediv.appendChild(nodeP);
    nodeP.textContent = input.value;
    containerCard.appendChild(nodediv);

    nodediv.style.transform = rotate();
    nodediv.style.background = colorCard();
    input.value = "";
  }

  nodediv.addEventListener("dblclick", function () {
    nodediv.style.display = "none";
  });
}

sendBtn.addEventListener("click", send);
