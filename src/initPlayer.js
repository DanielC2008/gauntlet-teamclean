"use strict";

var Player = function() {
  this.playerName = "no name";
  this.characterName = "no character chosen";
  this.skill = 50;
  this.speed = 50;
  this.health = 100;
  this.playerWeapon = null;
};


module.exports = {
  Player
};