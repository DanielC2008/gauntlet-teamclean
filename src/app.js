"use strict";

let Players = require("./Player.js");

console.log("Player: ", Players.initPlayer.Player("jim"));

var createdCharacter = new players.initPlayer.Player();
console.log("createdCharacter: ", createdCharacter);

function namePlayer () {
  createdCharacter.playerName = $("#playerName").val();
  $("#charSelectContainer").removeClass("hidden");
  console.log("created character: ", createdCharacter);
}

function list () {
  for (var i = 0; i < players.characters.characterObjects.length; i ++) {
    var characterButton = $("<button>").html(`${players.characters.characterObjects[i].characterName}`);
    container.append(characterButton);
  }
}

var enemy = new players.initPlayer.Player

list();
