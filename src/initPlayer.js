"use strict";

var Player = function() {
  this.playerName = "no name";
  this.player = true;
  this.initiative = 50;
  this.skill = 50;
  this.speed = 50;
  this.health = 100;
  this.playerWeapon = [];
};


module.exports = {
  Player
};