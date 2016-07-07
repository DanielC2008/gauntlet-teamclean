"use strict";

let Players = require("./Player.js");
let Gods = require("./Gods.js");

// console.log("Gods: ", Gods[1].name);

// var createdCharacter = new Players.initPlayer.Player();
var container = $("#characterContainer");

// enemy sample object
var enemy = new Players.characters.Seal();
var newBadJokes = new Players.abilities.badJokes();
enemy.playerWeapon = newBadJokes;

// hero sample object
var hero = new Players.characters.Kanye();
hero.playerWeapon = newBadJokes;

function randomNumber (x) {
  return Math.floor(Math.random() * (x-1) + 1);
}

function attack (player1, player2) {
  var player1Attack = player1.skill + player1.skillBonus;
  var player2Attack = player2.skill + player2.skillBonus;

  // damage math
  player1Attack = player1Attack/5 + randomNumber(10);
  player2Attack = player2Attack/5 + randomNumber(10);

  // crit chance
  if (randomNumber(20) > 16) {
    player1Attack = player1Attack * 2;
  }
  if (randomNumber(20) > 16) {
    player2Attack = player2Attack * 2;
  }

  var dodgeChance1 = player1.speed + player1.speedBonus;
  dodgeChance1 = dodgeChance1/10 + randomNumber(10);
  if (dodgeChance1 >= 18) {
    player2Attack = 0;
  }
  var dodgeChance2 = player2.speed + player2.speedBonus;
  dodgeChance2 = dodgeChance2/10 + randomNumber(10);
  if (dodgeChance2 >= 18) {
    player1Attack = 0;
  }

  console.log("player1: ", player1.characterName, player1Attack);
  console.log("player2: ", player2.characterName, player2Attack);

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
  var heroInitiative = hero.initiative + hero.initiativeBonus;
  heroInitiative = heroInitiative/4 + randomNumber(10);

  var enemyInitiative = enemy.initiative + enemy.initiativeBonus;
  enemyInitiative = enemyInitiative/4 + randomNumber(10);

  if (heroInitiative > enemyInitiative) {
    attack(hero, enemy);
  } else {
    attack(enemy, hero);
  }
}

var theEnemy = null;

function spawnEnemy () {
  theEnemy = Gods[randomNumber(Gods.length) - 1];
  console.log("god: ", theEnemy);
    $("#attackButton").attr("disabled", false);

}

$("#spawnButton").click( function () {
  spawnEnemy();
})

$("#attackButton").click( function () {
  if ( spawnEnemy === null) {
    console.log("no one to fight tho");
    return
  }
  initiative(hero, theEnemy);
});