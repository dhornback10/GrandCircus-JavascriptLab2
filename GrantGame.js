var grantHealth = 10;
var playerHealth = 40;
var playerWin = 0;
var grantWin = 0;
var Name;

startGame();

function startGame (){
  var playing = prompt("Would you like to play?")
  if (playing.toLowerCase() === "yes"){
    Name = prompt("What is your name?");
    startCombat();
  } else {
    console.log("You're missing out, bruh.");
  }
}


function startCombat (){
    while (playerWin < 3 && grantWin != 1) {
      var attacking = prompt("Would you like to attack or quit?");
      if (attacking.toLowerCase() === "attack") {
        if (playerHealth <= 0) {
          grantWin++;
          console.log("Grant the Mighty Chicken has won!");
        } else if (grantHealth <= 0) {
          playerWin++;
          grantHealth = 10;
        } else if (grantHealth >= 1 && playerHealth >= 1){
          playerHealth -= getDamage();
          grantHealth -= getDamage();
          console.log(Name + " has " + playerHealth + " health points left.")
          console.log("Grant the Mighty Chicken has " + grantHealth + " health points left.")
        }
      } else {
        console.log("You have quit the game!");
        break;
      }
}}
if (playerWin === 3) {
  console.log(Name + " has won!");
}



function getDamage (){
  return Math.floor(Math.random() * 5) + 1;
}