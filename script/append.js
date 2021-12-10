const makeGoblinCard = () => {
    let num = Math.floor(Math.random() * 19);
    let goblinObject = {
        name:goblinData[num].name,
        img:goblinData[num].img,
        hp:Math.ceil(Math.random() * 5) + 5
    };
    goblinClass.textContent = goblinOject.name;
    goblinImage.src = goblinObject.img;
    gobHpCount.textContent = goblinObject.hp;
    goblinStats.append(goblinClass, gobHpCount);
    goblinCard.append(goblinImage, goblinStats);
};

