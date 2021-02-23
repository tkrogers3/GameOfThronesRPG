let GameManager = {

setGameStart: function(classType){
this.resetPlayer(classType);
this.setPreFight();
},

resetPlayer: function(classType){


    switch(classType){
case "Jon":

player = new Player(classType, 200, 80, 30,50,90);
break;

case "Arya":

    player = new Player(classType, 100, 75, 70,40,30);
   break; 

    case "Daenerys":

        player = new Player(classType, 200, 80,70,40,60);

break;
case "Mountain":

    player = new Player(classType, 200, 55, 90,50,65);
    break;
    case "Hound":

    player = new Player(classType, 200, 55, 90,50,65);
    break;
}

let getInterface = document.querySelector(".interface");
getInterface.innerHTML = '<img src= "./img/players/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>'+classType + '</h3><p>Health: ' + player.health + '</p><p>Mana ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p> Agility: ' + player.agility + '</p><p>Speed: '+ player.speed + '</p></div>';
 
},
setPreFight: function() {


    let getHeader= document.querySelector(".header");
     
    let getActions= document.querySelector(".actions");

    let getArena= document.querySelector(".arena");
    
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
   
    getActions.innerHTML= '<a href ="#" class = "btn-prefight" onclick="GameManager.setFight()">Search for an enemy</a>';
    getArena.style.visibility="visible";
},

setFight: function(){
    let getHeader= document.querySelector(".header");

    let getActions= document.querySelector(".actions");

    let getEnemy= document.querySelector(".enemy");

    
    
    let enemy00 = new Enemy("iceDragon", 1000, 50, 60,30,100);

    let enemy01 = new Enemy("nightKing", 500, 20,60,30,44);

    let enemy02 = new Enemy("redPriestess",50,30,20,10,40);

    let chooseRandomEnemy= Math.floor(Math.random() * Math.floor(3));
    console.log(chooseRandomEnemy);
    switch(chooseRandomEnemy){
        case 0:
            enemy = enemy00;
            break;
    case 1:
        enemy = enemy01;
        break;

        case 2:
            enemy = enemy02;
    }
getHeader.HTML = "<p> Task: Choose your move.</p>"
getActions.innerHTML= '<a href ="#" class = "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
getEnemy.innerHTML='<img src= "./img/enemies/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>'+enemy.enemyType + '</h3><p>Health: ' + enemy.health + '</p><p>Mana ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p> Agility: ' + enemy.agility + '</p><p>Speed: '+ enemy.speed + '</p></div>';
}
};
