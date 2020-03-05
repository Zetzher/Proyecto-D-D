const imgDrake = document.querySelector(".dragonborned");
const imgDwarf = document.querySelector(".dwarfed");
const imgHuman = document.querySelector(".humaned");
const imgHalfelf = document.querySelector(".halfelfed");
const imgHalforc = document.querySelector(".halforced");
const imgHalfling = document.querySelector(".halflinged");
const imgTiefling = document.querySelector(".tieflinged");
const imgGnome = document.querySelector(".gnomed");
const imgElf = document.querySelector(".elfed");

const imgBarbarian = document.querySelector(".barbarianed");
const imgBardo = document.querySelector(".barded");
const imgCleric = document.querySelector(".clericed");
const imgDruid = document.querySelector(".druided");
const imgFighter = document.querySelector(".fightered");
const imgMonk = document.querySelector(".monked");
const imgPaladin = document.querySelector(".paladined");
const imgRanger = document.querySelector(".rangered");
const imgRogue = document.querySelector(".rogueed");
const imgSorcerer = document.querySelector(".sorcerered");
const imgWarlock = document.querySelector(".warlocked");
const imgWizard = document.querySelector(".wizarded");

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


//RAZAS//

//Dragonborn alojamiento datos//
let datosDragonborn =
    fetch("https://www.dnd5eapi.co/api/races/dragonborn")
    .then(response => response.json())
    .then(reply => {
            let dataDragonborn = {};
            dataDragonborn.alignment = reply.alignment;
            dataDragonborn.size = reply.size_description;
            dataDragonborn.language = reply.language_desc;
            let h4Maker = document.createElement('h4');
            h4Maker.innerHTML = `${dataDragonborn.alignment} <br><br> ${dataDragonborn.size} <br><br> ${dataDragonborn.language}`;
            imgDrake.appendChild(h4Maker)
            return dataDragonborn
        }

    );



//Dwarf alojamiento datos//
let datosDwarf =
    fetch("https://www.dnd5eapi.co/api/races/dwarf")
    .then(response => response.json())
    .then(reply => {
        let dataDwarf = {};
        dataDwarf.alignment = reply.alignment;
        dataDwarf.size = reply.size_description;
        dataDwarf.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataDwarf.alignment} <br><br> ${dataDwarf.size} <br><br> ${dataDwarf.language}`;
        imgDwarf.appendChild(h4Maker)
        return dataDwarf
    });



//Human alojamiento datos//
let datosHuman =
    fetch("https://www.dnd5eapi.co/api/races/human")
    .then(response => response.json())
    .then(reply => {
        let dataHuman = {};
        dataHuman.alignment = reply.alignment;
        dataHuman.size = reply.size_description;
        dataHuman.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataHuman.alignment} <br><br> ${dataHuman.size} <br><br> ${dataHuman.language}`;
        imgHuman.appendChild(h4Maker)
        return dataHuman
    });



//Half-Elf alojamiento datos//
let datosHalfElf =
    fetch("https://www.dnd5eapi.co/api/races/half-elf")
    .then(response => response.json())
    .then(reply => {
        let dataHalfelf = {};
        dataHalfelf.alignment = reply.alignment;
        dataHalfelf.size = reply.size_description;
        dataHalfelf.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataHalfelf.alignment} <br><br> ${dataHalfelf.size} <br><br> ${dataHalfelf.language}`;
        imgHalfelf.appendChild(h4Maker)
        return dataHalfelf
    });



//Half-Orc alojamiento datos//
let datosHalforc =
    fetch("https://www.dnd5eapi.co/api/races/half-orc")
    .then(response => response.json())
    .then(reply => {
        let dataHalforc = {};
        dataHalforc.alignment = reply.alignment;
        dataHalforc.size = reply.size_description;
        dataHalforc.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataHalforc.alignment} <br><br> ${dataHalforc.size} <br><br> ${dataHalforc.language}`;
        imgHalforc.appendChild(h4Maker)
        return dataHalforc
    });



//Halfling alojamiento datos//
let datosHalfling =
    fetch("https://www.dnd5eapi.co/api/races/halfling")
    .then(response => response.json())
    .then(reply => {
        let dataHalfling = {};
        dataHalfling.alignment = reply.alignment;
        dataHalfling.size = reply.size_description;
        dataHalfling.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataHalfling.alignment} <br><br> ${dataHalfling.size} <br><br> ${dataHalfling.language}`;
        imgHalfling.appendChild(h4Maker)
        return dataHalfling
    });






//Tiefling alojamiento datos//
let datosTiefling =
    fetch("https://www.dnd5eapi.co/api/races/tiefling")
    .then(response => response.json())
    .then(reply => {
        let dataTiefling = {};
        dataTiefling.alignment = reply.alignment;
        dataTiefling.size = reply.size_description;
        dataTiefling.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataTiefling.alignment} <br><br> ${dataTiefling.size} <br><br> ${dataTiefling.language}`;
        imgTiefling.appendChild(h4Maker)
        return dataTiefling
    });





//Gnome alojamiento datos//
let datosGnome =
    fetch("https://www.dnd5eapi.co/api/races/gnome")
    .then(response => response.json())
    .then(reply => {
        let dataGnome = {};
        dataGnome.alignment = reply.alignment;
        dataGnome.size = reply.size_description;
        dataGnome.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataGnome.alignment} <br><br> ${dataGnome.size} <br><br> ${dataGnome.language}`;
        imgGnome.appendChild(h4Maker)
        return dataGnome
    })






//Elf alojamiento datos//
let datosElf =
    fetch("https://www.dnd5eapi.co/api/races/elf")
    .then(response => response.json())
    .then(reply => {
        let dataElf = {};
        dataElf.alignment = reply.alignment;
        dataElf.size = reply.size_description;
        dataElf.language = reply.language_desc;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataElf.alignment} <br><br> ${dataElf.size} <br><br> ${dataElf.language}`;
        imgElf.appendChild(h4Maker)
        return dataElf
    })






//CLASES//


//Almacenado información barbaro//
const datosBarbarian =
    fetch("https://www.dnd5eapi.co/api/classes/barbarian")
    .then(response => response.json())
    .then(reply => {
        let dataBarbarian = {};
        dataBarbarian.name = reply.name;
        dataBarbarian.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataBarbarian.description = `Used to wild territories, barbarians have been to tons of danger 
            situations that have made them stronger. They are fighters, skilled with every 
            kind of weapon and able to use their wild fury when it is needed. 
            If your character has been borned in a inhospitable territory and had to fight 
            for his/her life, barbarian could be your class.`

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataBarbarian.name} <br><br> ${dataBarbarian.skills} <br><br> ${dataBarbarian.description}`;
        imgBarbarian.appendChild(h4Maker)
        return dataBarbarian
    });


//Almacenado datos Bardo//
const datosBard =
    fetch("https://www.dnd5eapi.co/api/classes/bard")
    .then(response => response.json())
    .then(reply => {
        let dataBard = {};
        dataBard.name = reply.name;
        dataBard.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataBard.description = `Pending to complete.`

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataBard.name} <br><br> ${dataBard.skills} <br><br> ${dataBard.description}`;
        imgBardo.appendChild(h4Maker)
        return dataBard
    });




//Almacenado información clérigo//
const datosCleric =
    fetch("https://www.dnd5eapi.co/api/classes/cleric")
    .then(response => response.json())
    .then(reply => {
        let dataCleric = {};
        dataCleric.name = reply.name;
        dataCleric.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataCleric.description = `Clerics are devout people which faith allow them to be weapons from gods,
            making miracles such healling wounds or resurrect the dead.
            World is a danger place, they have learned to defend themselves when spells were not enough.
            If you want your character be willing to surrender his life for the god who loves, fight and
            help his comrades with his spells, you should use cleric as your character.`;

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataCleric.name} <br><br> ${dataCleric.skills} <br><br> ${dataCleric.description}`;
        imgCleric.appendChild(h4Maker)
        return dataCleric
    });



//Almacenado información druida//
const datosDruid =
    fetch("https://www.dnd5eapi.co/api/classes/druid")
    .then(response => response.json())
    .then(reply => {
        let dataDruid = {};
        dataDruid.name = reply.name;
        dataDruid.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataDruid.description = `United with the nature in a way none of the adventures in this world
    can understand, druids try to keep balance between flora, fauna and civilized races which they take
    natural resources without worring for the impact their choices have to the world.
    Druids are warriors, but their main power it is found in their spells and the animals they adopt.
    If you want to be a character who is in harmony with the nature and is ready to defend it, druid could
    be your class.`;

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataDruid.name} <br><br> ${dataDruid.skills} <br><br> ${dataDruid.description}`;
        imgDruid.appendChild(h4Maker)
        return dataDruid
    });


//Almacenado información fighter//
const datosFighter =
    fetch("https://www.dnd5eapi.co/api/classes/fighter")
    .then(response => response.json())
    .then(reply => {
        let dataFighter = {};
        dataFighter.name = reply.name;
        dataFighter.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataFighter.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataFighter.name} <br><br> ${dataFighter.skills} <br><br> ${dataFighter.description}`;
        imgFighter.appendChild(h4Maker)
        return dataFighter
    });



//Almacenado información monk//
const datosMonk =
    fetch("https://www.dnd5eapi.co/api/classes/monk")
    .then(response => response.json())
    .then(reply => {
        let dataMonk = {};
        dataMonk.name = reply.name;
        dataMonk.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataMonk.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataMonk.name} <br><br> ${dataMonk.skills} <br><br> ${dataMonk.description}`;
        imgMonk.appendChild(h4Maker)
        return dataMonk
    });





//Almacenado información paladin//
const datosPaladin =
    fetch("https://www.dnd5eapi.co/api/classes/paladin")
    .then(response => response.json())
    .then(reply => {
        let dataPaladin = {};
        dataPaladin.name = reply.name;
        dataPaladin.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataPaladin.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataPaladin.name} <br><br> ${dataPaladin.skills} <br><br> ${dataPaladin.description}`;
        imgPaladin.appendChild(h4Maker)
        return dataPaladin
    });


//Almacenado información ranger//
const datosRanger =
    fetch("https://www.dnd5eapi.co/api/classes/ranger")
    .then(response => response.json())
    .then(reply => {
        let dataRanger = {};
        dataRanger.name = reply.name;
        dataRanger.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataRanger.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataRanger.name} <br><br> ${dataRanger.skills} <br><br> ${dataRanger.description}`;
        imgRanger.appendChild(h4Maker)
        return dataRanger
    });


//Almacenado información rogue//
const datosRogue =
    fetch("https://www.dnd5eapi.co/api/classes/rogue")
    .then(response => response.json())
    .then(reply => {
        let dataRogue = {};
        dataRogue.name = reply.name;
        dataRogue.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataRogue.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataRogue.name} <br><br> ${dataRogue.skills} <br><br> ${dataRogue.description}`;
        imgRogue.appendChild(h4Maker)
        return dataRogue
    });




//Almacenado información hechicero//
const datosSorcecer =
    fetch("https://www.dnd5eapi.co/api/classes/sorcerer")
    .then(response => response.json())
    .then(reply => {
        let dataSorcerer = {};
        dataSorcerer.name = reply.name;
        dataSorcerer.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataSorcerer.description = `Most of people who can do spells, have made a sacrifice to obtain their powers,
            be a disciplined study or a covenant with an entity from another world.
            But sorcerers have their power through their veins from the day they were born.
            If you want your character to be able to cast spells for having a magic ancestor in their family tree,
            you should choose sorcerer as your classs.`;

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataSorcerer.name} <br><br> ${dataSorcerer.skills} <br><br> ${dataSorcerer.description}`;
        imgSorcerer.appendChild(h4Maker)
        return dataSorcerer
    });




//Almacenado información brujo//
const datosWarlock =
    fetch("https://www.dnd5eapi.co/api/classes/warlock")
    .then(response => response.json())
    .then(reply => {
        let dataWarlock = {};
        dataWarlock.name = reply.name;
        dataWarlock.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataWarlock.description = `The world is full of incompressible wonders, but furthermore... furthermore
        there is inmeasurable power waiting to be dominated.
        Warlocks have done a covenant with an entity from other plane of existence to acquire magic power
        and thanks to such alliance they are capable of making spells which have a lot of power.
    
        If you want your character to have such thirst of power which would make him a covenant with another
        entity who does not understand, you should choose warlock as your class.`;

        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataWarlock.name} <br><br> ${dataWarlock.skills} <br><br> ${dataWarlock.description}`;
        imgWarlock.appendChild(h4Maker)
        return dataWarlock
    });



//Almacenado información wizard//
const datosWizard =
    fetch("https://www.dnd5eapi.co/api/classes/wizard")
    .then(response => response.json())
    .then(reply => {
        let dataWizard = {};
        dataWizard.name = reply.name;
        dataWizard.skills = reply.proficiency_choices[0].from.map(element => element.name);
        dataWizard.description = `Pending to complete.`;
        let h4Maker = document.createElement('h4');
        h4Maker.innerHTML = `${dataWizard.name} <br><br> ${dataWizard.skills} <br><br> ${dataWizard.description}`;
        imgWizard.appendChild(h4Maker)
        return dataWizard
    });