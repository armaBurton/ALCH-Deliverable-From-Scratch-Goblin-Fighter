// import functions and grab DOM elements
import { goblinData } from "./goblinData.js";
import { heroData } from "./heroData.js";

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

//array of characters
const heroArr = [
    `daemon`,
    `feralDruid`,
    `hunter`,
    `mage`,
    `monk`,
    `robotChicken`,
    `rogue`,
    `shaman`,
    `warrior`,
    `zword`
];

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
        // console.log(playerImage.src);
        resetAll();
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

//reset game board
function resetAll(){
    deadGoblinCounter.textContent = '';
    
    makePlayerCard();
}

function makePlayerCard(){
    playerHP = 50;
    charClass.textContent = characterClass;
    hitPoints.append(hpCount);
    charStats.append(charClass, hitPoints);
    charSheet.append(playerName, playerImage, charStats);
    playerCard.append(charSheet);
}

