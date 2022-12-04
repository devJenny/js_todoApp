const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    todoForm.classList.remove(HIDDEN_CLASSNAME);

}


function paintGreetings(username) {
    greeting.innerText = `Welcome ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // greeting.style.color = "white"
    
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show the greetings
    paintGreetings(savedUsername);
}