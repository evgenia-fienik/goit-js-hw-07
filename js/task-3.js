const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
if (input && output) {
  input.addEventListener("input", () => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
      output.textContent = "Anonymous";
    } else {
      output.textContent = inputValue;
    }
  });
}
