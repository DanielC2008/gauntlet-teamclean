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

var hero = new Players.characters.Goldblum();
hero.playerWeapon = newBadJokes;

console.log("enemy: ", enemy.skill, enemy);


function attack (player, computer) {
  var playerAttack = player.skill + player.skillBonus;
  var computerAttack = computer.skill + computer.skillBonus;
  playerAttack = playerAttack/5;
  playerAttack = playerAttack + Math.floor(Math.random() * (10-1) + 1);
  computerAttack = computerAttack/5;
  computerAttack = computerAttack + Math.floor(Math.random() * (10-1) + 1);
  computer.health = computer.health - playerAttack;
  if (computer.health < 0) {
    console.log("winner: player");
    return
  }
  player.health = player.health - computerAttack;
  if (player.health < 0) {
    console.log("winner: computer");
    return
  }
  console.log("player attack random: ", playerAttack);

  console.log("player", player.health);
  console.log("computer", computer.health);
}

// $("#attackButton").click(attack(hero, enemy));

attack(hero, enemy);
attack(hero, enemy);

attack(hero, enemy);

attack(hero, enemy);
attack(hero, enemy);
attack(hero, enemy);
attack(hero, enemy);
attack(hero, enemy);


list();
