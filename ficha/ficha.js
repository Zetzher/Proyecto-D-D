function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function chooseStats() {
    const dice1 = Math.floor(Math.random() * 6);
    const dice2 = Math.floor(Math.random() * 6);
    const dice3 = Math.floor(Math.random() * 6);
    const dice4 = Math.floor(Math.random() * 6);
    let result = dice1 + dice2 + dice3 + dice4;
    return result
}




