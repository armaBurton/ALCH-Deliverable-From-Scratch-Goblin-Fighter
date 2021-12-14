// import functions and grab DOM elements
import { goblinData } from "./goblinData.js";
import { heroData } from "./heroData.js";
import { takesDamage } from "./takesDamage.js";
import { doesDamage } from "./doesDamage.js";
import { makeGoblinCard } from "./makeGoblinCard.js";
export let scrollingCombatText = [];
export const sct = document.getElementById(`scrolling-combat-text`);

//grab character picker cards
const daemon = document.getElementById(`daemon`);
const feralDruid = document.getElementById(`feral-druid`);
const hunter = document.getElementById(`hunter`);
const mage = document.getElementById(`mage`);
const monk = document.getElementById(`monk`);
const robotChicken = document.getElementById(`robot-chicken`);
const rogue = document.getElementById(`rogue`);
const shaman = document.getElementById(`shaman`);
const warrior = document.getElementById(`warrior`);
const zword = document.getElementById(`zword`);

const playerNameInput = document.getElementById(`player-name-input`);
const playerChooser = document.getElementById(`player-chooser`);
const deadGoblinCounter = document.getElementById(`dead-goblin-counter`);
// const playerCard =

//state
let heroName = '';
let characterClass = '';
let playerHP = 50;
let deadGoblins = 0;

/* stored characters
💀
*/

//add event listeners
daemon.addEventListener(`click`, () =>{
    characterClass = `Daemon`;
    checkName();
});

feralDruid.addEventListener(`click`, () =>{
    characterClass = `Feral Druid`;
    checkName();
});

hunter.addEventListener(`click`, () =>{
    characterClass = `Hunter`;
    checkName();
});

mage.addEventListener(`click`, () =>{
    characterClass = `Mage`;
    checkName();
});

monk.addEventListener(`click`, () =>{
    characterClass = `Monk`;
    checkName();
});

robotChicken.addEventListener(`click`, () =>{
    characterClass = `Robot Chicken`;
    checkName();
});

rogue.addEventListener(`click`, () =>{
    characterClass = `Rogue`;
    checkName();
});

shaman.addEventListener(`click`, () =>{
    characterClass = `Shaman`;
    checkName();
});

warrior.addEventListener(`click`, () =>{
    characterClass = `Warrior`;
    checkName();
});

zword.addEventListener(`click`, () =>{
    characterClass = `Zword`;
    checkName();
});


function checkName(){
    if (playerNameInput.value === ''){
        alert(`Please enter a hero name!`);
    } else {
        playerChooser.classList.add(`visibility`);
        heroName = playerNameInput.value;
        playerName.textContent = heroName;
        for (let hero of heroData){
            if (hero.name === characterClass){
                playerImage.src = hero.img;
            }
        }
        makePlayerCard();
    
        goblinHovel.append(makeGoblinCard());
        goblinHovel.append(makeGoblinCard());
    }
}

//build player card
// const charSheet = document.createElement(`div`);
// charSheet.id = `char-sheet`;
// charSheet.classList.add(`char-sheet`);

const playerCard = document.getElementById(`player-card`);

const charSheet = document.createElement(`div`);
charSheet.id = `char-sheet`;
charSheet.classList.add(`char-sheet`);

const playerName = document.createElement(`h2`);
playerName.id = `player-name`;
playerName.classList.add(`player-name`);

const playerImage = document.createElement(`img`);
playerImage.id = `player-image`;
playerImage.classList.add(`player-image`);

const charStats = document.createElement(`div`);
charStats.id = (`char-stats`);
charStats.classList.add(`char-stats`);

const charClass = document.createElement(`div`);
charClass.id = `char-class`;
charClass.classList.add(`char-class`);

const hitPoints = document.createElement(`div`);
hitPoints.id = `hit-points`;
hitPoints.classList.add(`hit-points`);
hitPoints.textContent = `HP ≈ `;

const hpCount = document.createElement(`span`);
hpCount.id = `hp-count`;
hpCount.classList.add(`hp-count`);
hpCount.textContent = playerHP;

//build goblin card
const goblinHovel = document.getElementById(`goblin-hovel`);

function resetAll(){
    characterClass = '';
    deadGoblinCounter.textContent = '';
    playerCard.textContent = ``;
    goblinHovel.textContent = '';
    deadGoblins = 0;
    playerHP = 50;
    hpCount.textContent = playerHP;
    makePlayerCard();
    sct.textContent = ``;
}

function makePlayerCard(){
    charClass.textContent = characterClass;
    hitPoints.append(hpCount);
    charStats.append(charClass, hitPoints);
    charSheet.append(playerName, playerImage, charStats);
    playerCard.append(charSheet);
}

const form = document.querySelector(`form`);
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const newGoblin = document.createElement(`p`);
    newGoblin.classList.add(`newGoblin`);
    newGoblin.textContent = `A new goblin has joined the battle!`;
    sct.prepend(newGoblin);
    goblinHovel.append(makeGoblinCard());
    // makeGoblinCard();
});

// console.log(scrollingCombatText);
// sct.append(scrollingCombatText);

export const clickEvents = (goblinObject, gobHpCount, goblinCard) => {
    takesDamage(goblinObject);
    gobHpCount.textContent = goblinObject.hp;
    isGoblinDead(goblinObject.hp, goblinCard);
    playerHP = doesDamage(playerHP);
    hpCount.textContent = playerHP;


    for (let fight of scrollingCombatText){
        console.log(fight);
    }


    if (playerHP === 0){
        toggleRestart();
    }
};

const allMyDeadGoblins = document.getElementById(`this-many`);
allMyDeadGoblins.textContent = deadGoblins;

let deathTray = document.getElementById(`reload-game`);
let yes = document.getElementById(`yes`);
let no = document.getElementById(`no`);

yes.addEventListener(`click`, () => {
    deathTray.classList.add(`visibility`);
    resetAll();
    playerChooser.classList.remove(`visibility`);

});

no.addEventListener(`click`, () => {
    document.location.href = `https://getwork.com/`;
});


function toggleRestart(){ 
    allMyDeadGoblins.textContent = deadGoblins;
    deathTray.classList.remove(`visibility`);
}

function isGoblinDead(goblinHP, goblinCard) {
    if (goblinHP === 0){
        toggleGoblinDeath(goblinCard);
        const deadGoblin = document.createElement(`p`);
        deadGoblin.classList.add(`dead-goblin`);
        deadGoblin.textContent = `You have slain a goblin`;
        sct.prepend(deadGoblin);
        // deadGoblins++;
    }
}

function toggleGoblinDeath(goblinCard){
    goblinCard.classList.add(`opacity`);
    // goblinCard.style.display = `none`;
    // goblinCard.style.pointerEvents = `none`;
    // goblinCard.setAttribute(`pointer-events`, `none`);
    goblinCard.classList.add(`no-touch`);
    deadGoblins++;
    console.log(deadGoblins);
    renderDeadGoblins();
}

function renderDeadGoblins(){
    deadGoblinCounter.textContent = '';
    for (let i = 0; i < deadGoblins; i++){
        deadGoblinCounter.textContent += `💀`;
    }
}

makeGoblinCard();