"use strict";

let Players = require("./player.js");


console.log("Player: ", Players.initPlayer.Player("jim"));

var createdCharacter = new Players.initPlayer.Player();
console.log("createdCharacter: ", createdCharacter);

function namePlayer () {
  createdCharacter.playerName = $("#playerName").val();
  $("#charSelectContainer").removeClass("hidden");
  console.log("created character: ", createdCharacter);
}
Players.Dom.populateDom()
Players.Dom.addClickListeners();
Players.Dom.user1
function userTest () {
	console.log("user: ", Players.Dom.user1);
}

$("#addPlayerName").click( function () {
	userTest();
})

var enemy = new Players.initPlayer.Player