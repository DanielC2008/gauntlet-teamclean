"use strict";
//create god function with base stats
const God = function(){
  this.characterName = null;
  this.skill = 50;
  this.speed = 50;
  this.initiative = 50;
};

/// create greek function with greek specific stats
var Greek = function(name,health,strength,speed, initiative, abilityObject) {
  this.characterName = name;
  this.origin = "Greek";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.ability = abilityObject;
};

Greek.prototype = new God();
//create persian fuction with Persian specific stats
var Persian = function(name,health,strength,speed, initiative,abilityObject) {
  this.characterName = name;
  this.origin = "Persian";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.ability = abilityObject;
};

Persian.prototype = new God();
// create each enemy
var Zeus = new Greek("Zeus",200,65,10, 35, { ability: "Lightning Bolts" });
var Athena = new Greek("Athena",200,40,15, 25, { ability: "Smartness" });
var Artemis = new Greek("Artemis",200,60,20, 20, { ability: "Being Majestic af" });
var Ares = new Greek("Ares", 200,50,15, 15, { ability: "War?" });
var Ra = new Persian("Ra",200,40,15, 25, { ability: "Burning Things" });
var Amun = new Persian("Amun",200,50,15, 30, { ability: "Windiness" });
var Khepri = new Persian("Khepri",200,65,10, 20, { ability: "Bugs" });
var Khnum = new Persian("Khnum",200,60,20, 15, { ability: "Calling his ram friends" });

module.exports = [ Zeus, Athena, Artemis, Ares, Ra, Amun, Khepri, Khnum ];