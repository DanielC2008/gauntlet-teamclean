"use strict";

let Players = require("./Player.js");

// console.log("Player: ", Players.initPlayer.Player("jim"));

var createdCharacter = new Players.initPlayer.Player();
var container = $("#characterContainer");

var enemy = new Players.characters.Seal();
var newBadJokes = new Players.abilities.badJokes();
enemy.playerWeapon = newBadJokes;

var hero = new Players.characters.Kanye();
hero.playerWeapon = newBadJokes;

console.log("enemy: ", enemy.skill, enemy);


function attack (player1, player2) {
  var player1Attack = player1.skill + player1.skillBonus;
  var player2Attack = player2.skill + player2.skillBonus;

  // damage math
  player1Attack = player1Attack/5;
  player1Attack = player1Attack + Math.floor(Math.random() * (10-1) + 1);
  player2Attack = player2Attack/5;
  player2Attack = player2Attack + Math.floor(Math.random() * (10-1) + 1);

  // crit chance
  var critChance1 = Math.floor(Math.random() * (20 - 1) + 1);
  if (critChance1 > 16) {
    player1Attack = player1Attack * 2;
  }
  var critChance2 = Math.floor(Math.random() * (20 - 1) + 1);
  if (critChance2 > 16) {
    player2Attack = player2Attack * 2;
  }
  console.log("player1Attack", player1Attack);
  console.log("player2Attack", player2Attack);

  console.log("player1: ", player1.characterName);
  console.log("player2: ", player2.characterName);

  // hitting each other
  player2.health = player2.health - player1Attack;
  if (player2.health < 0) {
    console.log("winner: ", player1.characterName);
    $("#attackButton").attr("disabled", true);
    return;
  }
  player1.health = player1.health - player2Attack;
  if (player1.health < 0) {
    console.log("winner: ", player2.characterName);
    $("#attackButton").attr("disabled", true);
    return;
  }
}

function initiative (hero, enemy) {
  var heroInitiative = hero.speed + hero.speedBonus;
  heroInitiative = heroInitiative/4;
  heroInitiative = heroInitiative + Math.floor(Math.random() * (10 - 1) + 1);
  var enemyInitiative = enemy.speed + enemy.speedBonus;
  enemyInitiative = enemyInitiative/4;
  enemyInitiative = enemyInitiative + Math.floor(Math.random() * (10 - 1) + 1);
  console.log("enemy: ", enemyInitiative);
  console.log("heroInitiative", heroInitiative);

  if (heroInitiative > enemyInitiative) {
    attack(hero, enemy);
  } else {
    attack(enemy, hero);
  }
}

$("#attackButton").click( function () {
  initiative(hero, enemy);
});