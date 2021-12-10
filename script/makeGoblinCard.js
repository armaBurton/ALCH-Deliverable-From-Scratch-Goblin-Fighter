import { goblinData } from "./goblinData.js";
import { clickEvents } from "./script.js";

export const makeGoblinCard = () => {
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
        
    goblinCard.addEventListener(`click`, () => {
        clickEvents(goblinObject, gobHpCount, goblinCard);
    });

    return goblinCard;
};