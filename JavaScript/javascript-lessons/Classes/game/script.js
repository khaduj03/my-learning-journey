// Select DOM elements
const playerOneName = document.querySelector(".player-one");
const playerTwoName = document.querySelector(".player-two");
const resultRight = document.querySelector(".result-right");
const resultLeft = document.querySelector(".result-left");
const simulateBtn = document.querySelector(".simulate");

// Keys
const attackRightBtn = document.querySelector(".attack-right");
const healRightBtn = document.querySelector(".heal-right");
const attackLeftBtn = document.querySelector(".attack-left");
const healLeftBtn = document.querySelector(".heal-left");

// Player class
class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
  }

  attack(opponent) {
    opponent.health -= this.attackDamage;
    if (opponent.health < 0) opponent.health = 0;
  }

  heal() {
    this.health += 10;
    if (this.health > 100) this.health = 100;
  }
}

// Game class
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.isOver = false;
  }

  update() {
    playerOneName.textContent = this.player1.name;
    playerTwoName.textContent = this.player2.name;

    resultRight.textContent = this.player1.health;
    resultLeft.textContent = this.player2.health;

    if (this.player1.health === 0 || this.player2.health === 0) {
      this.isOver = true;
      alert(
        `${
          this.player1.health === 0 ? this.player2.name : this.player1.name
        } wins!`
      );
      // Disable buttons on game over
      attackRightBtn.disabled = true;
      healRightBtn.disabled = true;
      attackLeftBtn.disabled = true;
      healLeftBtn.disabled = true;
    }
  }
}

// Create players and game instance
let player1 = new Player("Qazi", 100, 10);
let player2 = new Player("Me", 100, 10);
let game = new Game(player1, player2);

game.update();

// Add event listeners to buttons

attackRightBtn.addEventListener("click", () => {
  if (!game.isOver) {
    player1.attack(player2);
    game.update();
  }
});

healRightBtn.addEventListener("click", () => {
  if (!game.isOver) {
    player1.heal();
    game.update();
  }
});

attackLeftBtn.addEventListener("click", () => {
  if (!game.isOver) {
    player2.attack(player1);
    game.update();
  }
});

healLeftBtn.addEventListener("click", () => {
  if (!game.isOver) {
    player2.heal();
    game.update();
  }
});

// Optional: "Simulate" button randomly chooses an action for each player

simulateBtn.addEventListener("click", () => {
  if (game.isOver) return;

  // Randomly attack or heal for player1
  if (Math.random() > 0.5) {
    player1.attack(player2);
  } else {
    player1.heal();
  }

  // Randomly attack or heal for player2
  if (Math.random() > 0.5) {
    player2.attack(player1);
  } else {
    player2.heal();
  }

  game.update();
});
