import { scrollingCombatText, sct } from "./script.js";

export function takesDamage(goblinObject){
    let hitRoll = doesPlayerHit();

    // hitRoll ? goblinObject.hp-- : goblinObject.hp;

    // console.log(hitRoll, goblinObject.hp);

    const goblinTakesDamage = document.createElement(`p`);
    goblinTakesDamage.classList.add(`blueberry`);
    if (hitRoll){
        goblinTakesDamage.textContent = `You have damaged a goblin`;
        scrollingCombatText.push(goblinTakesDamage);
        goblinObject.hp--;
    } else {
        goblinTakesDamage.textContent = `You missed a goblin`;
        scrollingCombatText.push(goblinTakesDamage);
    }
    
    
    sct.prepend(goblinTakesDamage);

}



function doesPlayerHit(){
    let randoNumbo = Math.ceil(Math.random() * 2);

    return (randoNumbo === 1) ? true : false;
}


