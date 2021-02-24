window.alert("This is an alert! JavaScript is running!");
function fight() {
  window.alert("The fight has begun!");
}
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (playerInfo.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (playerInfo.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10,
    },
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10,
    },
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
    shield: {
      type: "wood",
      strength: 10,
    },
  },
];

const REFILL = "refill";
const UPGRADE = "upgrade";
const LEAVE = "leave";

var fight = function (enemy) {
  while (enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    if (promptFight.toLowerCase() === "fight") {
      enemy.health = enemy.health - playerInfo.attack;
      console.log(
        playerInfo.name +
          " attacked " +
          enemy.name +
          ". " +
          enemy.name +
          " now has " +
          enemy.health +
          " health remaining."
      );
      playerInfo.health = playerInfo.health - enemy.attack;
      console.log(
        enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.name +
          " now has " +
          playerInfo.health +
          " health remaining."
      );
      if (playerInfo.health > 0) {
        console.log("Your player is still alive!");
      }
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
      } else {
        window.alert(
          enemy.name + " still has " + enemy.health + " health left."
        );
      }
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.health + " has died!");
        break;
      } else {
        window.alert(
          playerInfo.name + " still has " + playerInfo.health + " health left."
        );
      }
    } else if (promptFight.toLowerCase() === "skip") {
      window.alert(playerInfo.name + " has chosen to skip the fight!");
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(
          playerInfo.name + " has decided to skip this fight. Goodbye!"
        );
        playerInfo.money = playerInfo.money - 2;
        console.log("playerMoney ", playerInfo.money);
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
  //playerHealth = 100;
  //playerAttack = 10;
  //playerMoney = 10;
  for (var i = 0; i < enemyInfo.length; i++) {
    var pickedEnemyObj = enemyInfo[i];
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      pickedEnemyObj.health = randomNumber(40, 60);
      //enemy.attack = randomNumber(10, 14);
      fight(pickedEnemyObj);
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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
      playerInfo.refillHealth();
      break;
    case UPGRADE:
      playerInfo.upgradeAttack();
      break;
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
