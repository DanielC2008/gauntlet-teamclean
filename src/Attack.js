"use strict";

let Players = require("./Player.js");
let Gods = require("./Gods.js");

let enemy = new Players.characters.Seal();
let newBadJokes = new Players.abilities.badJokes();
enemy.playerWeapon = newBadJokes;


let hero = new Players.characters.Kanye();
hero.playerWeapon = newBadJokes;

function randomNumber (x) {
  return Math.floor(Math.random() * (x-1) + 1);
}

function attack (player1, player2) {
  let player1Attack = player1.skill + player1.skillBonus;
  let player2Attack = player2.skill + player2.skillBonus;

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

  let dodgeChance1 = player1.speed + player1.speedBonus;
  dodgeChance1 = dodgeChance1/10 + randomNumber(10);
  if (dodgeChance1 >= 18) {
    player2Attack = 0;
  }
  let dodgeChance2 = player2.speed + player2.speedBonus;
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
    winnerAnnouncement(player1);
    return;
  }
  player1.health = player1.health - player2Attack;
  if (player1.health < 0) {
    // console.log("winner: ", player2.characterName);
    winnerAnnouncement(player2);
    $("#attackButton").attr("disabled", true);
    return;
  }
}

function winnerAnnouncement (winner) {
  console.log("winner announcement:", winner);
  console.log( `The winner is ${winner.characterName} with the use of ${winner.ability.ability}.` );
}

function initiative (hero, enemy) {
  if ( enemy === undefined) {
    console.log("no one to fight tho");
    return;
  }
  console.log("hero: ", hero);
  console.log("enemy: ", enemy);
  let heroInitiative = hero.initiative + hero.initiativeBonus;
  heroInitiative = heroInitiative/4 + randomNumber(10);

  let enemyInitiative = enemy.initiative + enemy.initiativeBonus;
  enemyInitiative = enemyInitiative/4 + randomNumber(10);

  if (heroInitiative > enemyInitiative) {
    attack(hero, enemy);
  } else {
    attack(enemy, hero);
  }
}

function spawnEnemy (enemy) {
  // enemy = Gods[randomNumber(Gods.length) - 1];
  return Gods[randomNumber(Gods.length) - 1];
  // console.log("god: ", enemy);
    // $("#attackButton").attr("disabled", false);
}



let attackFunctions = {
  randomNumber, attack, initiative, spawnEnemy
};

module.exports = attackFunctions;