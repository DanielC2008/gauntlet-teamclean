"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.strength = 90;
  this.intelligence = 90;

  // this.toString = function() {
  //   var output = [this.playerName,
  //     ": a ",
  //     this.skinColor,
  //     " skinned ",
  //     this.species,
  //     " ",
  //     this.class,
  //     " with ",
  //     this.health,
  //     " health. ",
  //     (this.class.magical) ? "Able to cast " : " Wielding a ",
  //     this.weapon.toString(),
  //     "!"
  //   ].join("");
  //   return output;
  // };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a 
  constructor function.
 */

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

