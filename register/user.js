function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

'use strict'

class User {
  constructor(user, email, password){
  this.user = user;
  this.email = email;
  this.password = password;
  }
}