"use strict";

let Players = require("./Player.js");
let Gods = require("./Gods.js");
let Attack = require("./Attack.js");
let Dom = require("./DOMfunctions");

let user;  
let theEnemy;

$("#fightReady").click( function () {
  user = Dom.user[0];
  theEnemy = Attack.spawnEnemy();
  Attack.addCharacterCards(user, theEnemy);
  $("#attackButton").removeClass("hidden");
  $("#fightReady").addClass("hidden");
});

$("#attackButton").click( function () {
  Attack.initiative(user, theEnemy);
});

Dom.populateDom();
