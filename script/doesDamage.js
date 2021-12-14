import { scrollingCombatText, sct } from "./script.js";

export function doesDamage(playerHP){
    let hitRoll = doesGoblinHit();
    console.log(hitRoll);

    const playerTakesDamage = document.createElement(`p`);
    playerTakesDamage.classList.add(`strawberry`);
    if (hitRoll){
        playerTakesDamage.textContent = `You have been damaged by a goblin.`;
        scrollingCombatText.push(playerTakesDamage);
        playerHP--;
    } else {
        playerTakesDamage.textContent = `A goblin missed hitting you.`;
        scrollingCombatText.push(playerTakesDamage);
    }
    
    
    sct.prepend(playerTakesDamage);
    
    return playerHP;
}

function doesGoblinHit(){
    let randoNumbo = Math.ceil(Math.random() * 3);

    return (randoNumbo === 1) ? true : false;
}