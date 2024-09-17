const form = document.createElement("form");
form.id = "loginForm";

const usernameLabel = document.createElement("label");
usernameLabel.textContent = "Username:";
form.appendChild(usernameLabel);

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "username";
form.appendChild(usernameInput);

const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password:";
form.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
form.appendChild(passwordInput);

const submitButton = document.createElement("button");
submitButton.textContent = "Login";
submitButton.type = "submit";
form.appendChild(submitButton);
const divGame = document.createElement("div");
divGame.id = "game"
divGame.addEventListener("click",startGame)
document.body.appendChild(form);


function startGame(){
    new Game();
}




const login = "Davo";
const password = "233733";

localStorage.setItem("textLogin", login);
localStorage.setItem("textPassword", password);
   


document.addEventListener("DOMContentLoaded",() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
        showGame();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    logginPassword();
});

function logginPassword() {
    const usernameInputValue = document.getElementById("username").value;
    const passwordInputValue = document.getElementById("password").value;
    const getLogin = localStorage.getItem("textLogin");
    const getPassword = localStorage.getItem("textPassword");

    if (usernameInputValue === getLogin && passwordInputValue === getPassword) {
        localStorage.setItem("loggedIn", "true")
       showGame();
    } else {
        alert("Try one more time :)");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

function showGame() {
    document.getElementById("loginForm").style.display = "none";
   

     startGame();

    let theButtonAdd = document.createElement("button");
    theButtonAdd.textContent = "Add";
    theButtonAdd.id = "addbutton";
    document.body.appendChild(theButtonAdd);
    theButtonAdd.addEventListener("click", buttonAdd);

    let logOutButton = document.createElement("button");
    logOutButton.textContent = "Log out";
    logOutButton.id = "logOutButton";
    document.body.appendChild(logOutButton);
    logOutButton.addEventListener("click", logOut);
}

function buttonAdd() {
    startGame();
}

const logOut = () => {
    localStorage.setItem("loggedIn", "false");
    document.getElementById("addbutton").remove();
    document.getElementById("logOutButton").remove();
    location.reload();
  
};



function logOutAfther24Hours(){
    let miliSecondIn24Hours = 24 * 60 * 60 * 1000;
    setTimeout(() => {
        logOut();
    }, miliSecondIn24Hours);
}


logOutAfther24Hours();