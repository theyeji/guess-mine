const main = document.getElementById("jsMain");
const loginForm = document.getElementById("jsLogin");
const nickname = localStorage.getItem("nickname");

const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

const login = (nickname) => {
  const socket = io("/");
  socket.emit("setNickname", { nickname });
};

if (nickname === null) {
  main.classList.toggle(LOGGED_OUT);
} else {
  main.classList.toggle(LOGGED_IN);
  login(nickname);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  main.classList.toggle(LOGGED_OUT);
  main.classList.toggle(LOGGED_IN);
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
