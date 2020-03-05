function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function chooseStats() {
  const dice1 = Math.ceil(Math.random() * 6);
  const dice2 = Math.ceil(Math.random() * 6);
  const dice3 = Math.ceil(Math.random() * 6);
  const dice4 = Math.ceil(Math.random() * 6);
  let result = dice1 + dice2 + dice3 + dice4;
  return result
}

//Corresponde a los dados para los stats//
let buttonStrength = document.getElementById("buttStrength");
let strengthInput = document.getElementById("strengthDice");

buttonStrength.onclick = function () {
  return strengthInput.value = chooseStats();
}

let buttonDexterity = document.getElementById("buttDexterity");
let dexterityInput = document.getElementById("dexterityDice");

buttonDexterity.onclick = function () {
  return dexterityInput.value = chooseStats();
}

let buttPhysical = document.getElementById("buttPhysical");
let physicalInput = document.getElementById("physicalDice");

buttPhysical.onclick = function () {
  return physicalInput.value = chooseStats();
}

let buttIntelligence = document.getElementById("buttIntelligence");
let intelligenceInput = document.getElementById("intelligenceDice");

buttIntelligence.onclick = function () {
  return intelligenceInput.value = chooseStats();
}

let buttWisdom = document.getElementById("buttWisdom");
let wisdomInput = document.getElementById("wisdomDice");

buttWisdom.onclick = function () {
  return wisdomInput.value = chooseStats();
}

let buttCharisma = document.getElementById("buttCharisma");
let charismaInput = document.getElementById("charismaDice");

buttCharisma.onclick = function () {
  return charismaInput.value = chooseStats();
}

//Corresponde a clase armadura//

let totalClaseArmadura = document.getElementById("totalClaseArmadura")
let calcularButton = document.getElementById("calcularStats")

let espBlanco = document.getElementById("espBlanco");
let bonifArmadura = document.getElementById("bonifArmadura");
let bonifEscudo = document.getElementById("bonifEscudo");
let bonifDestreza = document.getElementById("bonifDestreza");
let bonifTamaño = document.getElementById("bonifTamaño");
let armaduraNatural = document.getElementById("armaduraNatural");
let bonificacionDesvio = document.getElementById("bonificacionDesvio");
let bonificacionVarios = document.getElementById("bonificacionVarios");

espBlanco.value = 0;
bonifArmadura.value = 0;
bonifEscudo.value = 0;
bonifDestreza.value = 0;
bonifTamano.value = 0;
armaduraNatural.value = 0;
bonificacionDesvio.value = 0;
bonificacionVarios.value = 0;

calcularClaseArmadura.onclick = function () {
  return totalClaseArmadura.value = claseArmadura();
}

function claseArmadura(){
  return  parseInt(espBlanco.value) + parseInt(bonifArmadura.value) + parseInt(bonifEscudo.value) + parseInt(bonifDestreza.value) + parseInt(bonifTamano.value) + parseInt(armaduraNatural.value) + parseInt(bonificacionDesvio.value) + parseInt(bonificacionVarios.value);
}


//Corresponde a Modificador de iniciativa//



//para utilizar el valor, hay que invocarlo con .value//