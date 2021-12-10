export function takesDamage(goblinObject){
    let hitRoll = doesPlayerHit();

    hitRoll ? goblinObject.hp-- : goblinObject.hp;

    // console.log(hitRoll, goblinObject.hp);



}

function doesPlayerHit(){
    let randoNumbo = Math.ceil(Math.random() * 2);

    return (randoNumbo === 1) ? true : false;
}


