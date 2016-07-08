"use strict";

let Players = require("./player.js");
let User;


console.log("Player: ", Players.initPlayer.Player("jim"));

var createdCharacter = new Players.initPlayer.Player();
console.log("createdCharacter: ", createdCharacter);

function namePlayer () {
  createdCharacter.playerName = $("#playerName").val();
  $("#charSelectContainer").removeClass("hidden");
  console.log("created character: ", createdCharacter);
}

$(document).on("click", "button.characterButton", function(){
	User = Players.Dom.user;
	console.log("user",User );
})

Players.Dom.populateDom()
Players.Dom.addClickListeners();

var enemy = new Players.initPlayer.Player