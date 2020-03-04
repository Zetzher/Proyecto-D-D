let form = document.getElementById("signup_form");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("confirmpassword");

let signUpButton = document.getElementById("registerbutton");
let formWrapper = document.getElementById("form_wrapper");

let usersDB = JSON.parse(localStorage.getItem('users'));

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    deleteErrors();

    if (checkValidUser()) {
        console.log("User registered")
        createUser(name.value, email.value, password.value)
        window.location.href = "../home/home.html";//para redirigir al usuario a la página web.
    }
})

function checkValidUser() {
    let signUpValidator = new SignUpValidator(userName.value, email.value, password.value, repeatPassword.value);

    let usersDB = JSON.parse(localStorage.getItem('users'));
    let validUser = true;

    if (!signUpValidator.checkUserName()) {
        signUpValidator.errorCreator("Por favor, introduzca un Username válido", userName);
        validUser = false;
    }

    if (!signUpValidator.checkEmail()) {
        signUpValidator.errorCreator("Por favor, introduce una dirección de mail válida", email);
        validUser = false;
    }

    if (!signUpValidator.checkPassword()) {
        signUpValidator.errorCreator("Por favor, introduce una contraseña válida", password);
        validUser = false;
    }

    if (!signUpValidator.checkRepeatPassword()) {
        signUpValidator.errorCreator("Las contraseñas no coinciden", email);
        validUser = false;
    }

    if (!signUpValidator.checkEmailInDB(usersDB)) {
        signUpValidator.errorCreator("Este mail ya existe", email);
        validUser = false;
    }
    return validUser;
}

function deleteErrors() {
    let errors = [...document.getElementsByClassName("error")];
    errors ? errors.forEach(error => error.remove()) : null;
}

function createUser(name, email, password) {
    const newUser = new User(name, email, password);

    if (usersDB) {
        usersDB.push(newUser);
    } else {
        usersDB = [newUser];
    }
    localStorage.setItem("users", JSON.stringify(usersDB))
}