function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let email = document.getElementById("email");
let password = document.getElementById("password");
let buttonLogin = document.getElementById("login-button");
let usersDB = JSON.parse(localStorage.getItem("users"));

buttonLogin.addEventListener("click", function (event) {
    event.preventDefault();


    for (let i = 0; i < usersDB.length; i++) {
        if (password.value === usersDB[i].password && email.value === usersDB[i].email) {
            createCurrentUser(usersDB[i])
                window.location.href = "../home/home.html";
            
        }
    }
})




function createCurrentUser(user){
    localStorage.setItem("currentUser", JSON.stringify(user));
    }
