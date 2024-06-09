const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerGetComment);
function handlerGetComment(evt) {
  evt.preventDefault();
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert("All form fields must be filled in");
    return;
  }
  //   console.dir(evt.currentTarget);
  //   const { email, password } = evt.currentTarget.elements;
  //   console.log(email.value);
  //   console.log(password.value);
  //   const data = {
  //     email: email.value,
  //     password: password.value,
  //   };
  //   console.log(data);
  const formData = new FormData(evt.currentTarget);
  const data = {};
  formData.forEach((value, kay) => (data[kay] = value));
  console.log(data);
  form.reset();
}
