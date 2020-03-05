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

function claseArmadura() {
  return parseInt(espBlanco.value) + parseInt(bonifArmadura.value) + parseInt(bonifEscudo.value) + parseInt(bonifDestreza.value) + parseInt(bonifTamano.value) + parseInt(armaduraNatural.value) + parseInt(bonificacionDesvio.value) + parseInt(bonificacionVarios.value);
}


//Corresponde a Modificador de Iniciativa//
let modificadorDeIniciativa = document.getElementById("modificadorDeIniciativa");
let iniDestreza = document.getElementById("iniDestreza");
let iniModificadores = document.getElementById("iniModificadores");
let calcularModIniciativa = document.getElementById("calcularModIniciativa");

iniDestreza.value = 0;
iniModificadores.value = 0;

calcularModIniciativa.onclick = function () {
  return modificadorDeIniciativa.value = claseIniciativa();
}

function claseIniciativa() {
  return parseInt(iniDestreza.value) + parseInt(iniModificadores.value);
}


//Corresponde a Tiros de Salvación//

//Fortaleza//
let totalFortaleza = document.getElementById("totalFortaleza");
let salvacionBaseFortaleza = document.getElementById("salvacionBaseFortaleza");
let modBaseFortaleza = document.getElementById("modBaseFortaleza");
let modDeMagiaFortaleza = document.getElementById("modDeMagiaFortaleza");
let modVariosFortaleza = document.getElementById("modVariosFortaleza");
let modTemporalesFortaleza = document.getElementById("modTemporalesFortaleza");
let modCondicionalesFortaleza = document.getElementById("modCondicionalesFortaleza");
let calcularTiroFortaleza = document.getElementById("calcularTiroFortaleza")


salvacionBaseFortaleza.value = 0;
modBaseFortaleza.value = 0;
modDeMagiaFortaleza.value = 0;
modVariosFortaleza.value = 0;
modTemporalesFortaleza.value = 0;
modCondicionalesFortaleza.value = 0;


calcularTiroFortaleza.onclick = function () {
  return totalFortaleza.value = claseTirosSalvacionFortaleza();
}

function claseTirosSalvacionFortaleza() {
  return parseInt(salvacionBaseFortaleza.value) + parseInt(modBaseFortaleza.value) + parseInt(modDeMagiaFortaleza.value) + parseInt(modVariosFortaleza.value) + parseInt(modTemporalesFortaleza.value) + parseInt(modCondicionalesFortaleza.value);
}

//Reflejos//
let totalReflejos = document.getElementById("totalReflejos");
let salvacionBaseReflejos = document.getElementById("salvacionBaseReflejos");
let modBaseReflejos = document.getElementById("modBaseReflejos");
let modDeMagiaReflejos = document.getElementById("modDeMagiaReflejos");
let modVariosReflejos = document.getElementById("modVariosReflejos");
let modTemporalesReflejos = document.getElementById("modTemporalesReflejos");
let modCondicionalesReflejos = document.getElementById("modCondicionalesReflejos");
let calcularTiroReflejos = document.getElementById("calcularTiroReflejos")


salvacionBaseReflejos.value = 0;
modBaseReflejos.value = 0;
modDeMagiaReflejos.value = 0;
modVariosReflejos.value = 0;
modTemporalesReflejos.value = 0;
modCondicionalesReflejos.value = 0;


calcularTiroReflejos.onclick = function () {
  return totalReflejos.value = claseTirosSalvacionReflejos();
}

function claseTirosSalvacionReflejos() {
  return parseInt(salvacionBaseReflejos.value) + parseInt(modBaseReflejos.value) + parseInt(modDeMagiaReflejos.value) +
    parseInt(modVariosReflejos.value) + parseInt(modTemporalesReflejos.value) + parseInt(modCondicionalesReflejos.value);
}


//Voluntad//
let totalVoluntad = document.getElementById("totalVoluntad");
let salvacionBaseVoluntad = document.getElementById("salvacionBaseVoluntad");
let modBaseVoluntad = document.getElementById("modBaseVoluntad");
let modDeMagiaVoluntad = document.getElementById("modDeMagiaVoluntad");
let modVariosVoluntad = document.getElementById("modVariosVoluntad");
let modTemporalesVoluntad = document.getElementById("modTemporalesVoluntad");
let modCondicionalesVoluntad = document.getElementById("modCondicionalesVoluntad");
let calcularTiroVoluntad = document.getElementById("calcularTiroVoluntad")


salvacionBaseVoluntad.value = 0;
modBaseVoluntad.value = 0;
modDeMagiaVoluntad.value = 0;
modVariosVoluntad.value = 0;
modTemporalesVoluntad.value = 0;
modCondicionalesVoluntad.value = 0;


calcularTiroVoluntad.onclick = function () {
  return totalVoluntad.value = claseTirosSalvacionVoluntad();
}

function claseTirosSalvacionVoluntad() {
  return parseInt(salvacionBaseVoluntad.value) + parseInt(modBaseVoluntad.value) + parseInt(modDeMagiaVoluntad.value) +
    parseInt(modVariosVoluntad.value) + parseInt(modTemporalesVoluntad.value) + parseInt(modCondicionalesVoluntad.value);
}


//Corresponde a combate//

//Cuerpo a cuerpo//
let totalCuerpo = document.getElementById("totalCuerpo");
let ataqueBaseCuerpo = document.getElementById("ataqueBaseCuerpo");
let modFuerzaCuerpo = document.getElementById("modFuerzaCuerpo");
let modTamañoCuerpo = document.getElementById("modTamañoCuerpo");
let modVariosCuerpo = document.getElementById("modVariosCuerpo");
let modTemporalesCuerpo = document.getElementById("modTemporalesCuerpo");
let calcularCombateCuerpo = document.getElementById("calcularCombateCuerpo");

ataqueBaseCuerpo.value = 0;
modFuerzaCuerpo.value = 0;
modTamañoCuerpo.value = 0;
modVariosCuerpo.value = 0;
modTemporalesCuerpo.value = 0;

calcularCombateCuerpo.onclick = function () {
  return totalCuerpo.value = sumarCombateCuerpo();
}

function sumarCombateCuerpo() {
  return parseInt(ataqueBaseCuerpo.value) + parseInt(modFuerzaCuerpo.value) + parseInt(modTamañoCuerpo.value) +
    parseInt(modVariosCuerpo.value) + parseInt(modTemporalesCuerpo.value);
}


//Distancia//
let totalDistancia = document.getElementById("totalDistancia");
let ataqueBaseDistancia = document.getElementById("ataqueBaseDistancia");
let modFuerzaDistancia = document.getElementById("modFuerzaDistancia");
let modTamañoDistancia = document.getElementById("modTamañoDistancia");
let modVariosDistancia = document.getElementById("modVariosDistancia");
let modTemporalesDistancia = document.getElementById("modTemporalesDistancia");
let calcularCombateDistancia = document.getElementById("calcularCombateDistancia");

ataqueBaseDistancia.value = 0;
modFuerzaDistancia.value = 0;
modTamañoDistancia.value = 0;
modVariosDistancia.value = 0;
modTemporalesDistancia.value = 0;

calcularCombateDistancia.onclick = function () {
  return totalDistancia.value = sumarCombateDistancia();
}

function sumarCombateDistancia() {
  return parseInt(ataqueBaseDistancia.value) + parseInt(modFuerzaDistancia.value) + parseInt(modTamañoDistancia.value) +
    parseInt(modVariosDistancia.value) + parseInt(modTemporalesDistancia.value);
}

//Corresponde a la ficha de habilidades//

//Cerraduras//
let totalCerraduras = document.getElementById("totalCerraduras");
let calcularCerraduras = document.getElementById("calcularCerraduras");
let modCerraduras = document.getElementById("modCerraduras");
let rangosIntencionesrangosCerraduras = document.getElementById("rangosCerraduras");
let variosCerraduras = document.getElementById("variosCerraduras");

modCerraduras.value = 0;
rangosCerraduras.value = 0;
variosCerraduras.value = 0;

calcularCerraduras.onclick = function () {
  return totalCerraduras.value = calcularSkillCerraduras();
}

function calcularSkillCerraduras() {
  return parseInt(modCerraduras.value) + parseInt(rangosCerraduras.value) + parseInt(variosCerraduras.value);
}

//Intenciones//
let totalIntenciones = document.getElementById("totalIntenciones");
let calcularIntenciones = document.getElementById("calcularIntenciones");
let modIntenciones = document.getElementById("modIntenciones");
let rangosIntenciones = document.getElementById("rangosIntenciones");
let variosIntenciones = document.getElementById("variosIntenciones");

modIntenciones.value = 0;
rangosIntenciones.value = 0;
variosIntenciones.value = 0;

calcularIntenciones.onclick = function () {
  return totalIntenciones.value = calcularSkillIntenciones();
}

function calcularSkillIntenciones() {
  return parseInt(modIntenciones.value) + parseInt(rangosCerraduras.value) + parseInt(variosIntenciones.value);
}


//Artesanía//
let totalArtesania = document.getElementById("totalArtesania");
let calcularArtesania = document.getElementById("calcularArtesania");
let modArtesania = document.getElementById("modArtesania");
let rangosArtesania = document.getElementById("rangosArtesania");
let variosArtesania = document.getElementById("variosArtesania");

modArtesania.value = 0;
rangosArtesania.value = 0;
variosArtesania.value = 0;

calcularArtesania.onclick = function () {
  return totalArtesania.value = calcularSkillArtesania();
}

function calcularSkillArtesania() {
  return parseInt(modArtesania.value) + parseInt(rangosArtesania.value) + parseInt(variosArtesania.value);
}


//Avistar//
let totalAvistar = document.getElementById("totalAvistar");
let calcularAvistar = document.getElementById("calcularAvistar");
let modAvistar = document.getElementById("modAvistar");
let rangosAvistar = document.getElementById("rangosAvistar");
let variosAvistar = document.getElementById("variosAvistar");

modAvistar.value = 0;
rangosAvistar.value = 0;
variosAvistar.value = 0;

calcularAvistar.onclick = function () {
  return totalAvistar.value = calcularSkillAvistar();
}

function calcularSkillAvistar() {
  return parseInt(modAvistar.value) + parseInt(rangosAvistar.value) + parseInt(variosAvistar.value);
}


//Buscar//
let totalBuscar = document.getElementById("totalBuscar");
let calcularBuscar = document.getElementById("calcularBuscar");
let modBuscar = document.getElementById("modBuscar");
let rangosBuscar = document.getElementById("rangosBuscar");
let variosBuscar = document.getElementById("variosBuscar");

modBuscar.value = 0;
rangosBuscar.value = 0;
variosBuscar.value = 0;

calcularBuscar.onclick = function () {
  return totalBuscar.value = calcularSkillBuscar();
}

function calcularSkillBuscar() {
  return parseInt(modBuscar.value) + parseInt(rangosBuscar.value) + parseInt(variosBuscar.value);
}


//Concentración//
let totalConcentración = document.getElementById("totalConcentración");
let calcularConcentración = document.getElementById("calcularConcentración");
let modConcentración = document.getElementById("modConcentración");
let rangosConcentración = document.getElementById("rangosConcentración");
let variosConcentración = document.getElementById("variosConcentración");

modConcentración.value = 0;
rangosConcentración.value = 0;
variosConcentración.value = 0;

calcularConcentración.onclick = function () {
  return totalConcentración.value = calcularSkillConcentración();
}

function calcularSkillConcentración() {
  return parseInt(modConcentración.value) + parseInt(rangosConcentración.value) + parseInt(variosConcentración.value);
}


//Escritura//
let totalEscritura = document.getElementById("totalEscritura");
let calcularEscritura = document.getElementById("calcularEscritura");
let modEscritura = document.getElementById("modEscritura");
let rangosEscritura = document.getElementById("rangosEscritura");
let variosEscritura = document.getElementById("variosEscritura");

modEscritura.value = 0;
rangosEscritura.value = 0;
variosEscritura.value = 0;

calcularEscritura.onclick = function () {
  return totalEscritura.value = calcularSkillEscritura();
}

function calcularSkillEscritura() {
  return parseInt(modEscritura.value) + parseInt(rangosEscritura.value) + parseInt(variosEscritura.value);
}


//Diplomacia//
let totalDiplomacia = document.getElementById("totalDiplomacia");
let calcularDiplomacia = document.getElementById("calcularDiplomacia");
let modDiplomacia = document.getElementById("modDiplomacia");
let rangosDiplomacia = document.getElementById("rangosDiplomacia");
let variosDiplomacia = document.getElementById("variosDiplomacia");

modDiplomacia.value = 0;
rangosDiplomacia.value = 0;
variosDiplomacia.value = 0;

calcularDiplomacia.onclick = function () {
  return totalDiplomacia.value = calcularSkillDiplomacia();
}

function calcularSkillDiplomacia() {
  return parseInt(modDiplomacia.value) + parseInt(rangosDiplomacia.value) + parseInt(variosDiplomacia.value);
}


//Disfrazarse//
let totalDisfrazarse = document.getElementById("totalDisfrazarse");
let calcularDisfrazarse = document.getElementById("calcularDisfrazarse");
let modDisfrazarse = document.getElementById("modDisfrazarse");
let rangosDisfrazarse = document.getElementById("rangosDisfrazarse");
let variosDisfrazarse = document.getElementById("variosDisfrazarse");

modDisfrazarse.value = 0;
rangosDisfrazarse.value = 0;
variosDisfrazarse.value = 0;

calcularDisfrazarse.onclick = function () {
  return totalDisfrazarse.value = calcularSkillDisfrazarse();
}

function calcularSkillDisfrazarse() {
  return parseInt(modDisfrazarse.value) + parseInt(rangosDisfrazarse.value) + parseInt(variosDisfrazarse.value);
}


//Engañar//
let totalEngañar = document.getElementById("totalEngañar");
let calcularEngañar = document.getElementById("calcularEngañar");
let modEngañar = document.getElementById("modEngañar");
let rangosEngañar = document.getElementById("rangosEngañar");
let variosEngañar = document.getElementById("variosEngañar");

modEngañar.value = 0;
rangosEngañar.value = 0;
variosEngañar.value = 0;

calcularEngañar.onclick = function () {
  return totalEngañar.value = calcularSkillEngañar();
}

function calcularSkillEngañar() {
  return parseInt(modEngañar.value) + parseInt(rangosEngañar.value) + parseInt(variosEngañar.value);
}


//Equilibrio//
let totalEquilibrio = document.getElementById("totalEquilibrio");
let calcularEquilibrio = document.getElementById("calcularEquilibrio");
let modEquilibrio = document.getElementById("modEquilibrio");
let rangosEquilibrio = document.getElementById("rangosEquilibrio");
let variosEquilibrio = document.getElementById("variosEquilibrio");

modEquilibrio.value = 0;
rangosEquilibrio.value = 0;
variosEquilibrio.value = 0;

calcularEquilibrio.onclick = function () {
  return totalEquilibrio.value = calcularSkillEquilibrio();
}

function calcularSkillEquilibrio() {
  return parseInt(modEquilibrio.value) + parseInt(rangosEquilibrio.value) + parseInt(variosEquilibrio.value);
}


//Escapismo//
let totalEscapismo = document.getElementById("totalEscapismo");
let calcularEscapismo = document.getElementById("calcularEscapismo");
let modEscapismo = document.getElementById("modEscapismo");
let rangosEscapismo = document.getElementById("rangosEscapismo");
let variosEscapismo = document.getElementById("variosEscapismo");

modEscapismo.value = 0;
rangosEscapismo.value = 0;
variosEscapismo.value = 0;

calcularEscapismo.onclick = function () {
  return totalEscapismo.value = calcularSkillEscapismo();
}

function calcularSkillEscapismo() {
  return parseInt(modEscapismo.value) + parseInt(rangosEscapismo.value) + parseInt(variosEscapismo.value);
}



//Esconderse//
let totalEsconderse = document.getElementById("totalEsconderse");
let calcularEsconderse = document.getElementById("calcularEsconderse");
let modEsconderse = document.getElementById("modEsconderse");
let rangosEsconderse = document.getElementById("rangosEsconderse");
let variosEsconderse = document.getElementById("variosEsconderse");

modEsconderse.value = 0;
rangosEsconderse.value = 0;
variosEsconderse.value = 0;

calcularEsconderse.onclick = function () {
  return totalEsconderse.value = calcularSkillEsconderse();
}

function calcularSkillEsconderse() {
  return parseInt(modEsconderse.value) + parseInt(rangosEsconderse.value) + parseInt(variosEsconderse.value);
}


//Escuchar//
let totalEscuchar = document.getElementById("totalEscuchar");
let calcularEscuchar = document.getElementById("calcularEscuchar");
let modEscuchar = document.getElementById("modEscuchar");
let rangosEscuchar = document.getElementById("rangosEscuchar");
let variosEscuchar = document.getElementById("variosEscuchar");

modEscuchar.value = 0;
rangosEscuchar.value = 0;
variosEscuchar.value = 0;

calcularEscuchar.onclick = function () {
  return totalEscuchar.value = calcularSkillEscuchar();
}

function calcularSkillEscuchar() {
  return parseInt(modEscuchar.value) + parseInt(rangosEscuchar.value) + parseInt(variosEscuchar.value);
}


//Falsificar//
let totalFalsificar = document.getElementById("totalFalsificar");
let calcularFalsificar = document.getElementById("calcularFalsificar");
let modFalsificar = document.getElementById("modFalsificar");
let rangosFalsificar = document.getElementById("rangosFalsificar");
let variosFalsificar = document.getElementById("variosFalsificar");

modFalsificar.value = 0;
rangosFalsificar.value = 0;
variosFalsificar.value = 0;

calcularFalsificar.onclick = function () {
  return totalFalsificar.value = calcularSkillFalsificar();
}

function calcularSkillFalsificar() {
  return parseInt(modFalsificar.value) + parseInt(rangosFalsificar.value) + parseInt(variosFalsificar.value);
}


//Interpetrar//
let totalInterpetrar = document.getElementById("totalInterpetrar");
let calcularInterpetrar = document.getElementById("calcularInterpetrar");
let modInterpetrar = document.getElementById("modInterpetrar");
let rangosInterpetrar = document.getElementById("rangosInterpetrar");
let variosInterpetrar = document.getElementById("variosInterpetrar");

modInterpetrar.value = 0;
rangosInterpetrar.value = 0;
variosInterpetrar.value = 0;

calcularInterpetrar.onclick = function () {
  return totalInterpetrar.value = calcularSkillInterpetrar();
}

function calcularSkillInterpetrar() {
  return parseInt(modInterpetrar.value) + parseInt(rangosInterpetrar.value) + parseInt(variosInterpetrar.value);
}



//Intimidar//
let totalIntimidar = document.getElementById("totalIntimidar");
let calcularIntimidar = document.getElementById("calcularIntimidar");
let modIntimidar = document.getElementById("modIntimidar");
let rangosIntimidar = document.getElementById("rangosIntimidar");
let variosIntimidar = document.getElementById("variosIntimidar");

modIntimidar.value = 0;
rangosIntimidar.value = 0;
variosIntimidar.value = 0;

calcularIntimidar.onclick = function () {
  return totalIntimidar.value = calcularSkillIntimidar();
}

function calcularSkillIntimidar() {
  return parseInt(modIntimidar.value) + parseInt(rangosIntimidar.value) + parseInt(variosIntimidar.value);
}


//Inutilizar Mecanismo//
let totalMecanismo = document.getElementById("totalMecanismo");
let calcularMecanismo = document.getElementById("calcularMecanismo");
let modMecanismo = document.getElementById("modMecanismo");
let rangosMecanismo = document.getElementById("rangosMecanismo");
let variosMecanismo = document.getElementById("variosMecanismo");

modMecanismo.value = 0;
rangosMecanismo.value = 0;
variosMecanismo.value = 0;

calcularMecanismo.onclick = function () {
  return totalMecanismo.value = calcularSkillMecanismo();
}

function calcularSkillMecanismo() {
  return parseInt(modMecanismo.value) + parseInt(rangosMecanismo.value) + parseInt(variosMecanismo.value);
}



//Juego de manos/Hurtar//
let totalHurtar = document.getElementById("totalHurtar");
let calcularHurtar = document.getElementById("calcularHurtar");
let modHurtar = document.getElementById("modHurtar");
let rangosHurtar = document.getElementById("rangosHurtar");
let variosHurtar = document.getElementById("variosHurtar");

modHurtar.value = 0;
rangosHurtar.value = 0;
variosHurtar.value = 0;

calcularHurtar.onclick = function () {
  return totalHurtar.value = calcularSkillHurtar();
}

function calcularSkillHurtar() {
  return parseInt(modHurtar.value) + parseInt(rangosHurtar.value) + parseInt(variosHurtar.value);
}



//Montar//
let totalMontar = document.getElementById("totalMontar");
let calcularMontar = document.getElementById("calcularMontar");
let modMontar = document.getElementById("modMontar");
let rangosMontar = document.getElementById("rangosMontar");
let variosMontar = document.getElementById("variosMontar");

modMontar.value = 0;
rangosMontar.value = 0;
variosMontar.value = 0;

calcularMontar.onclick = function () {
  return totalMontar.value = calcularSkillMontar();
}

function calcularSkillMontar() {
  return parseInt(modMontar.value) + parseInt(rangosMontar.value) + parseInt(variosMontar.value);
}



//Moverse Sigilosamente//
let totalSigilosamente = document.getElementById("totalSigilosamente");
let calcularSigilosamente = document.getElementById("calcularSigilosamente");
let modSigilosamente = document.getElementById("modSigilosamente");
let rangosSigilosamente = document.getElementById("rangosSigilosamente");
let variosSigilosamente = document.getElementById("variosSigilosamente");

modSigilosamente.value = 0;
rangosSigilosamente.value = 0;
variosSigilosamente.value = 0;

calcularSigilosamente.onclick = function () {
  return totalSigilosamente.value = calcularSkillSigilosamente();
}

function calcularSkillSigilosamente() {
  return parseInt(modSigilosamente.value) + parseInt(rangosSigilosamente.value) + parseInt(variosSigilosamente.value);
}



//Nadar//
let totalNadar = document.getElementById("totalNadar");
let calcularNadar = document.getElementById("calcularNadar");
let modNadar = document.getElementById("modNadar");
let rangosNadar = document.getElementById("rangosNadar");
let variosNadar = document.getElementById("variosNadar");

modNadar.value = 0;
rangosNadar.value = 0;
variosNadar.value = 0;

calcularNadar.onclick = function () {
  return totalNadar.value = calcularSkillNadar();
}

function calcularSkillNadar() {
  return parseInt(modNadar.value) + parseInt(rangosNadar.value) + parseInt(variosNadar.value);
}



//Piruetas//
let totalPiruetas = document.getElementById("totalPiruetas");
let calcularPiruetas = document.getElementById("calcularPiruetas");
let modPiruetas = document.getElementById("modPiruetas");
let rangosPiruetas = document.getElementById("rangosPiruetas");
let variosPiruetas = document.getElementById("variosPiruetas");

modPiruetas.value = 0;
rangosPiruetas.value = 0;
variosPiruetas.value = 0;

calcularPiruetas.onclick = function () {
  return totalPiruetas.value = calcularSkillPiruetas();
}

function calcularSkillPiruetas() {
  return parseInt(modPiruetas.value) + parseInt(rangosPiruetas.value) + parseInt(variosPiruetas.value);
}



//Reunir Información//
let totalInformación = document.getElementById("totalInformación");
let calcularInformación = document.getElementById("calcularInformación");
let modInformación = document.getElementById("modInformación");
let rangosInformación = document.getElementById("rangosInformación");
let variosInformación = document.getElementById("variosInformación");

modInformación.value = 0;
rangosInformación.value = 0;
variosInformación.value = 0;

calcularInformación.onclick = function () {
  return totalInformación.value = calcularSkillInformación();
}

function calcularSkillInformación() {
  return parseInt(modInformación.value) + parseInt(rangosInformación.value) + parseInt(variosInformación.value);
}


//Saber (Local/Región)//
let totalSaber = document.getElementById("totalSaber");
let calcularSaber = document.getElementById("calcularSaber");
let modSaber = document.getElementById("modSaber");
let rangosSaber = document.getElementById("rangosSaber");
let variosSaber = document.getElementById("variosSaber");

modSaber.value = 0;
rangosSaber.value = 0;
variosSaber.value = 0;

calcularSaber.onclick = function () {
  return totalSaber.value = calcularSkillSaber();
}

function calcularSkillSaber() {
  return parseInt(modSaber.value) + parseInt(rangosSaber.value) + parseInt(variosSaber.value);
}



//Saltar//
let totalSaltar = document.getElementById("totalSaltar");
let calcularSaltar = document.getElementById("calcularSaltar");
let modSaltar = document.getElementById("modSaltar");
let rangosSaltar = document.getElementById("rangosSaltar");
let variosSaltar = document.getElementById("variosSaltar");

modSaltar.value = 0;
rangosSaltar.value = 0;
variosSaltar.value = 0;

calcularSaltar.onclick = function () {
  return totalSaltar.value = calcularSkillSaltar();
}

function calcularSkillSaltar() {
  return parseInt(modSaltar.value) + parseInt(rangosSaltar.value) + parseInt(variosSaltar.value);
}



//Sanar//
let totalSanar = document.getElementById("totalSanar");
let calcularSanar = document.getElementById("calcularSanar");
let modSanar = document.getElementById("modSanar");
let rangosSanar = document.getElementById("rangosSanar");
let variosSanar = document.getElementById("variosSanar");

modSanar.value = 0;
rangosSanar.value = 0;
variosSanar.value = 0;

calcularSanar.onclick = function () {
  return totalSanar.value = calcularSkillSanar();
}

function calcularSkillSanar() {
  return parseInt(modSanar.value) + parseInt(rangosSanar.value) + parseInt(variosSanar.value);
}



//Superviviencia//
let totalSuperviviencia = document.getElementById("totalSuperviviencia");
let calcularSuperviviencia = document.getElementById("calcularSuperviviencia");
let modSuperviviencia = document.getElementById("modSuperviviencia");
let rangosSuperviviencia = document.getElementById("rangosSuperviviencia");
let variosSuperviviencia = document.getElementById("variosSuperviviencia");

modSuperviviencia.value = 0;
rangosSuperviviencia.value = 0;
variosSuperviviencia.value = 0;

calcularSuperviviencia.onclick = function () {
  return totalSuperviviencia.value = calcularSkillSuperviviencia();
}

function calcularSkillSuperviviencia() {
  return parseInt(modSuperviviencia.value) + parseInt(rangosSuperviviencia.value) + parseInt(variosSuperviviencia.value);
}



//Tasación//
let totalTasación = document.getElementById("totalTasación");
let calcularTasación = document.getElementById("calcularTasación");
let modTasación = document.getElementById("modTasación");
let rangosTasación = document.getElementById("rangosTasación");
let variosTasación = document.getElementById("variosTasación");

modTasación.value = 0;
rangosTasación.value = 0;
variosTasación.value = 0;

calcularTasación.onclick = function () {
  return totalTasación.value = calcularSkillTasación();
}

function calcularSkillTasación() {
  return parseInt(modTasación.value) + parseInt(rangosTasación.value) + parseInt(variosTasación.value);
}



//Trato con Animales//
let totalAnimales = document.getElementById("totalAnimales");
let calcularAnimales = document.getElementById("calcularAnimales");
let modAnimales = document.getElementById("modAnimales");
let rangosAnimales = document.getElementById("rangosAnimales");
let variosAnimales = document.getElementById("variosAnimales");

modAnimales.value = 0;
rangosAnimales.value = 0;
variosAnimales.value = 0;

calcularAnimales.onclick = function () {
  return totalAnimales.value = calcularSkillAnimales();
}

function calcularSkillAnimales() {
  return parseInt(modAnimales.value) + parseInt(rangosAnimales.value) + parseInt(variosAnimales.value);
}



//Trepar//
let totalTrepar = document.getElementById("totalTrepar");
let calcularTrepar = document.getElementById("calcularTrepar");
let modTrepar = document.getElementById("modTrepar");
let rangosTrepar = document.getElementById("rangosTrepar");
let variosTrepar = document.getElementById("variosTrepar");

modTrepar.value = 0;
rangosTrepar.value = 0;
variosTrepar.value = 0;

calcularTrepar.onclick = function () {
  return totalTrepar.value = calcularSkillTrepar();
}

function calcularSkillTrepar() {
  return parseInt(modTrepar.value) + parseInt(rangosTrepar.value) + parseInt(variosTrepar.value);
}



//Uso de objeto mágico//
let totalMágico = document.getElementById("totalMágico");
let calcularMágico = document.getElementById("calcularMágico");
let modMágico = document.getElementById("modMágico");
let rangosMágico = document.getElementById("rangosMágico");
let variosMágico = document.getElementById("variosMágico");

modMágico.value = 0;
rangosMágico.value = 0;
variosMágico.value = 0;

calcularMágico.onclick = function () {
  return totalMágico.value = calcularSkillMágico();
}

function calcularSkillMágico() {
  return parseInt(modMágico.value) + parseInt(rangosMágico.value) + parseInt(variosMágico.value);
}



//Uso de cuerdas//
let totalCuerdas = document.getElementById("totalCuerdas");
let calcularCuerdas = document.getElementById("calcularCuerdas");
let modCuerdas = document.getElementById("modCuerdas");
let rangosCuerdas = document.getElementById("rangosCuerdas");
let variosCuerdas = document.getElementById("variosCuerdas");

modCuerdas.value = 0;
rangosCuerdas.value = 0;
variosCuerdas.value = 0;

calcularCuerdas.onclick = function () {
  return totalCuerdas.value = calcularSkillCuerdas();
}

function calcularSkillCuerdas() {
  return parseInt(modCuerdas.value) + parseInt(rangosCuerdas.value) + parseInt(variosCuerdas.value);
}