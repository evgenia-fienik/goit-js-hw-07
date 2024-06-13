const input = document.querySelector('input[type ="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  }
  console.log(createButton);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
