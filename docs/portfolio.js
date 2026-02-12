const menu = document.querySelector("#bar");
const nav = document.querySelector(".navbar");
const closeMenu = document.querySelector("#close-menu");
const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#textarea");
const error = document.querySelector("#error");

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});

menu.addEventListener("click", () => {
  nav.classList.add("active");
});

form.addEventListener("submit", (e) => {
  let messages = [];
  if (nameInput.value === "" || nameInput.value === null)
    messages.push("Name is required!");

  if (emailInput.value === "" || emailInput.value === null)
    messages.push("Email is required!");

  if (messageInput.value === "" || messageInput.value === null)
    messages.push("Message is required!");

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join("\n");
    error.style.padding = "0 0 6px 0";
    error.style.color = "red";
  } else {
    e.preventDefault();
    error.innerText = "Request Submitted!";
    error.style.color = "green";
    error.style.padding = "0 0 6px 0";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});
