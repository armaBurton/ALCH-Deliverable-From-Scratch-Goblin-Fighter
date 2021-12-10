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
// const heroArr = [
//     `daemon`,
//     `feralDruid`,
//     `hunter`,
//     `mage`,
//     `monk`,
//     `robotChicken`,
//     `rogue`,
//     `shaman`,
//     `warrior`,
//     `zword`
// ];

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
        // console.log(playerImage.src);
        // resetAll();
        // for (let i = 0; i < 3; i++){
        //         let gob = makeGoblinCard();
        //         console.log(gob);
        //         holdMyGoblins.push(gob);
        //         console.log(holdMyGoblins);
        //         goblinHovel.append(holdMyGoblins[i]);
        //     }
        goblinHovel.append(makeGoblinCard());
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
    deadGoblinCounter.textContent = '';
    // holdMyGoblins = [];
    playerCard.textContent = ``;
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

const makeGoblinCard = () => {
    const goblinCard = document.createElement(`div`);
    goblinCard.classList.add(`goblin-card`);
    
    const goblinImage = document.createElement(`img`);
    goblinImage.classList.add(`goblin-image`);
    
    const goblinStats = document.createElement(`div`);
    goblinStats.classList.add(`goblin-stats`);
    
    const goblinClass = document.createElement(`p`);
    goblinClass.classList.add(`goblin-class`);
    
    const goblinHP = document.createElement(`p`);
    goblinHP.classList.add(`goblin-hp`);
    goblinHP.textContent = `HP ≈ `;
    
    const gobHpCount = document.createElement(`span`);
    gobHpCount.classList.add(`gob-hp-count`);

    let num = Math.floor(Math.random() * 19);
    let goblinObject = {
        name:goblinData[num].name,
        img:goblinData[num].img,
        hp:Math.ceil(Math.random() * 5) + 5
    };
    goblinClass.textContent = goblinObject.name;
    goblinImage.src = goblinObject.img;
    gobHpCount.textContent = goblinObject.hp;
    goblinHP.append(gobHpCount);
    goblinStats.append(goblinClass, goblinHP);
    goblinCard.append(goblinImage, goblinStats);
    console.log(goblinCard);
    return goblinCard;
};

makeGoblinCard();