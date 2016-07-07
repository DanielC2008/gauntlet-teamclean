"use strict";

let player = require("./initPlayer.js");

// // // initial character function // // //

var Character = function () {
  this.character = true;
  this.skillBonus = 0;
  this.speedBonus = 0;
  this.singer = false;
  this.actor = false;
};

Character.prototype = new player.Player();

// // // classification of characters // // //

var Actor = function () {
  this.actor = true;
  this.profession = "actor";
};

Actor.prototype = new Character();

var Singer = function () {
  this.singer = true;
  this.profession = "singer";
};

Singer.prototype = new Character();

// // // character functions // // //

// actors //

var Goldblum = function () {
  this.characterName = "Jeff Goldblum";
  this.functionName = "Goldblum";
  this.health = 300;
  this.skillBonus = 50;
  this.speedBonus = 50;
};

Goldblum.prototype = new Actor();

var jeffGoldblum = new Goldblum();

var BettyWhite = function () {
  this.characterName = "Betty White";
  this.health = 100;
  this.skillBonus = 40;
  this.speedBonus = 50;
};

BettyWhite.prototype = new Actor();

var bettyWhite = new BettyWhite();

var PaulyShore = function () {
  this.characterName = "PaulyShore";
  this.health = 90;
  this.skillBonus = 20;
  this.speedBonus = 40;
};

PaulyShore.prototype = new Actor();

var paulyShore = new PaulyShore();

var BillMurray = function () {
  this.characterName = "Bill Murray";
  this.health = 110;
  this.skillBonus = 40;
  this.speedBonus = 35;
};

BillMurray.prototype = new Actor();

var billMurray = new BillMurray();

// singers //

var Seal = function () {
  this.characterName = "Seal";
  this.health = 150;
  this.skillBonus = 55;
  this.speedBonus = 15;
};

Seal.prototype = new Singer();

var seal = new Seal();

var SpiceGirls = function () {
  this.characterName = "The Spice Girls";
  this.health = 125;
  this.skillBonus = 15;
  this.speedBonus = 40;
};

SpiceGirls.prototype = new Singer();

var spiceGirls = new SpiceGirls();

var Kanye = function () {
  this.characterName = "Kanye";
  this.health = 80;
  this.skillBonus = 10;
  this.speedBonus = 35;
};

Kanye.prototype = new Singer();

var kanye = new Kanye();

var LadyGaga = function () {
  this.characterName = "Lady Gaga";
  this.health = 110;
  this.skillBonus = 15;
  this.speedBonus = 55;
};

LadyGaga.prototype = new Singer();

var ladyGaga = new LadyGaga();

var characterObjects = [ jeffGoldblum, bettyWhite, paulyShore, billMurray, seal, spiceGirls, kanye, ladyGaga ];

module.exports = {

  Goldblum, BettyWhite, PaulyShore, BillMurray, Seal, SpiceGirls, Kanye, LadyGaga, characterObjects
};