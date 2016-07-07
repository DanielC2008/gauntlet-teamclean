"use strict";
//create god function with base stats
const God = function(){
  this.characterName = null;
  this.skill = 50;
  this.speed = 50;
  this.initiative = 50;
};

/// create greek function with greek specific stats
var Greek = function(name,health,strength,speed, initiative) {
  this.characterName = name;
  this.origin = "Greek";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
};

Greek.prototype = new God();
//create persian fuction with Persian specific stats
var Persian = function(name,health,strength,speed, initiative) {
  this.characterName = name;
  this.origin = "Persian";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
};

Persian.prototype = new God();
// create each enemy
var Zeus = new Greek("Zeus",45,65,10, 35);
var Athena = new Greek("Athena",50,40,15, 25);
var Artemis = new Greek("Artemis",40,60,20, 20);
var Ares = new Greek("Ares", 45,50,15, 15);
var Ra = new Persian("Ra",50,40,15, 25);
var Amun = new Persian("Amun",45,50,15, 30);
var Khepri = new Persian("Khepri",45,65,10, 20);
var Khnum = new Persian("Khnum",40,60,20, 15);

module.exports = [ Zeus, Athena, Artemis, Ares, Ra, Amun, Khepri, Khnum ];