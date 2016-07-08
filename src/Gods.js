"use strict";
//create god function with base stats
const God = function(){
  this.characterName = null;
  this.player = false;
  this.skill = 50;
  this.speed = 50;
  this.initiative = 50;
};

/// create greek function with greek specific stats
var Greek = function(name,health,strength,speed, initiative, abilityObject, godImage) {
  this.characterName = name;
  this.origin = "Greek";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.ability = abilityObject;
  this.image = godImage;
};

Greek.prototype = new God();
//create persian fuction with Persian specific stats
var Persian = function(name,health,strength,speed, initiative,abilityObject, godImage) {
  this.characterName = name;
  this.origin = "Persian";
  this.health = health;
  this.skillBonus = strength;
  this.speedBonus = speed;
  this.initiativeBonus = initiative;
  this.ability = abilityObject;
  this.image = godImage;
};

Persian.prototype = new God();
// create each enemy
var Zeus = new Greek("Zeus",120,45,10, 35, { ability: "Lightning Bolts" }, "http://img3.wikia.nocookie.net/__cb20141114050016/disney/images/3/3b/Hercules-zeus.png");
var Athena = new Greek("Athena",90,40,15, 25, { ability: "Smartness" }, "http://vignette2.wikia.nocookie.net/disney/images/b/b5/Hercules-br-disneyscreencaps.com-562.jpg/revision/latest?cb=20140901183801");
var Artemis = new Greek("Artemis",100,60,20, 20, { ability: "Being Majestic af" }, "http://vignette4.wikia.nocookie.net/disney/images/8/80/ARTEMIS12.jpg/revision/latest?cb=20150624162331");
var Ares = new Greek("Ares", 110,50,15, 15, { ability: "War?" }, "http://vignette2.wikia.nocookie.net/disney/images/0/05/Ares.png/revision/latest/scale-to-width-down/270?cb=20130527232553");
var Ra = new Persian("Ra",120,40,15, 25, { ability: "Burninating Things" }, "http://sotm.wdfiles.com/local--files/heroes:ra/Ra.png");
var Amun = new Persian("Amun",90,50,35, 30, { ability: "Windiness" }, "http://www.krschannel.com/amun_ra_.jpg");
var Khepri = new Persian("Khepri",110,35,10, 20, { ability: "Bugs" }, "http://hzweb.hi-rezgame.net/smite-web/wp-content/uploads/2015/07/2560x1440.png");
var Khnum = new Persian("Khnum",100,40,20, 15, { ability: "Calling his ram friends" }, "http://vignette4.wikia.nocookie.net/stargateapocalypse/images/9/9b/Khnum_XIX-0.jpg/revision/latest?cb=20150319155607");

module.exports = [ Zeus, Athena, Artemis, Ares, Ra, Amun, Khepri, Khnum ];