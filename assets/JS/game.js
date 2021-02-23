window.alert("This is an alert! JavaScript is running!");
function fight() {
  window.alert("The fight has begun!");
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;
const REFILL = "refill";
const UPGRADE = "upgrade";
const LEAVE = "leave";

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var fight = function (enemyName) {
  while (enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    if (promptFight.toLowerCase() === "fight") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );
      if (playerHealth > 0) {
        console.log("Your player is still alive!");
      }
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    } else if (promptFight.toLowerCase() === "skip") {
      window.alert(playerName + " has chosen to skip the fight!");
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        console.log("playerMoney ", playerMoney);
        break;
      } else {
        fight();
      }
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};

var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      enemyHealth = randomNumber(40, 60);
      enemyAttack = randomNumber(10, 14);
      fight(pickedEnemyName);
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );
        if (storeConfirm) {
          shop();
        }
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
  }
};

var endGame = function () {
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  console.log("Entered the shop");
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt.toLowerCase()) {
    case REFILL:
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
        break;
      } else {
        window.alert("You don't have enough money!");
      }
    case UPGRADE:
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
        break;
      } else {
        window.alert("You don't have enough money!");
      }
    case LEAVE:
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

startGame();
