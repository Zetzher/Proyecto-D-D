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
  constructor(name, email, password){
  this.name = name;
  this.email = email;
  this.password = password;
  }
}