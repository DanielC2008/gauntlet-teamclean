"use strict";

let Players = require("./Player.js");

// console.log("Player: ", Players.initPlayer.Player("jim"));

var createdCharacter = new Players.initPlayer.Player();
var container = $("#characterContainer");

function namePlayer () {
  createdCharacter.playerName = $("#playerName").val();
  $("#charSelectContainer").removeClass("hidden");
  // console.log("created character: ", createdCharacter);
}

function list () {
  for (var i = 0; i < Players.characters.characterObjects.length; i ++) {
    var characterButton = $("<button>").html(`${Players.characters.characterObjects[i].characterName}`);
    container.append(characterButton);
  }
}

var enemy = new Players.characters.Seal();
var newBadJokes = new Players.abilities.badJokes();
enemy.playerWeapon = newBadJokes;

var hero = new Players.characters.Kanye();
hero.playerWeapon = newBadJokes;

console.log("enemy: ", enemy.skill, enemy);


function attack (player1, player2) {
  console.log("attack");
  console.log("player1: ", player1);
  console.log("player2: ", player2);
  var player1Attack = player1.skill + player1.skillBonus;
  var player2Attack = player2.skill + player2.skillBonus;
  player1Attack = player1Attack/5;
  player1Attack = player1Attack + Math.floor(Math.random() * (10-1) + 1);
  player2Attack = player2Attack/5;
  player2Attack = player2Attack + Math.floor(Math.random() * (10-1) + 1);
  player2.health = player2.health - player1Attack;
  if (player2.health < 0) {
    console.log("winner: player");
    return;
  }
  player1.health = player1.health - player2Attack;
  if (player1.health < 0) {
    console.log("winner: computer");
    return;
  }
}

function initiative (hero, enemy) {
  var heroInitiative = hero.speed + hero.speedBonus;
  heroInitiative = heroInitiative/4;
  heroInitiative = heroInitiative + Math.floor(Math.random() * (10 - 1) +1);
  var enemyInitiative = enemy.speed + enemy.speedBonus;
  enemyInitiative = enemyInitiative/4;
  enemyInitiative = enemyInitiative + Math.floor(Math.random() * (10 - 1) +1);
  console.log("enemy: ", enemyInitiative);
  console.log("heroInitiative", heroInitiative);
  if (heroInitiative > enemyInitiative) {
    console.log("hero initiative: ");
    attack(hero, enemy);
  } else {
    console.log("enemy wins over: ", enemyInitiative);
    attack(enemy, hero);
  }
}

// $("#attackButton").click(attack(hero, enemy));

initiative(hero, enemy);


// list();
