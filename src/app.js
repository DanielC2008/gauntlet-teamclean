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

$("#attackButton").click( function () {
  initiative(hero, enemy);
});