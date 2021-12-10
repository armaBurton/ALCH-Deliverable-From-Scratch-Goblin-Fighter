export function doesDamage(playerHP){
    let hitRoll = doesGoblinHit();
    console.log(hitRoll);

    hitRoll ? playerHP-- : playerHP;
    
    return playerHP;
}

function doesGoblinHit(){
    let randoNumbo = Math.ceil(Math.random() * 3);

    return (randoNumbo === 1) ? true : false;
}