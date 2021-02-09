window.alert("This is an alert! JavaScript is running!")
function fight(){
    window.alert("The fight has begun!")
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var promptFight = window.propmt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
var playerMoney = 10

var fight = function() {
    promptFight()
    if (promptFight.toLowerCase === "fight") {
        window.alert("welcome to Robot Gladiators!");
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth > 0) {
        console.log("Your player is still alive!");
    }
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    
    }
}
else if (promptFight.toLowerCase === "skip") {
    window.alert(playerName + " has chosen to skip the fight!");
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
    }else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
    
};


fight();
