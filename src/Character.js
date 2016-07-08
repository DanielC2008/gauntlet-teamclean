"use strict";

let player = require("./initPlayer.js");

// // // initial character function // // //

var Character = function () {
  this.character = true;
  this.skillBonus = 0;
  this.initiativeBonus = 0;
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
  this.initiativeBonus = 50;
  this.speedBonus = 50;
  this.image = "http://images.hellogiggles.com/uploads/2016/04/15033920/jurass-park-4-world-jeff-goldblum.jpg";
};

Goldblum.prototype = new Actor();

var jeffGoldblum = new Goldblum();

var BettyWhite = function () {
  this.characterName = "Betty White";
  this.health = 100;
  this.initiativeBonus = 30;
  this.skillBonus = 30;
  this.speedBonus = 50;
  this.image = "https://pbs.twimg.com/profile_images/1125351141/BettyWhite1.jpg";
};

BettyWhite.prototype = new Actor();

var bettyWhite = new BettyWhite();

var PaulyShore = function () {
  this.characterName = "Pauly Shore";
  this.health = 80;
  this.initiativeBonus = 25;
  this.skillBonus = 20;
  this.speedBonus = 40;
  this.image = "https://www.picsofcelebrities.com/celebrity/pauly-shore/pictures/large/best-pictures-of-pauly-shore.jpg";
};

PaulyShore.prototype = new Actor();

var paulyShore = new PaulyShore();

var BillMurray = function () {
  this.characterName = "Bill Murray";
  this.health = 105;
  this.initiativeBonus = 35;
  this.skillBonus = 30;
  this.speedBonus = 35;
  this.image = "https://loftcinema.com/files/2015/06/murraybig.jpg";
};

BillMurray.prototype = new Actor();

var billMurray = new BillMurray();

// singers //

var Seal = function () {
  this.characterName = "Seal";
  this.health = 100;
  this.initiativeBonus = 30;
  this.skillBonus = 35;
  this.speedBonus = 15;
  this.image = "https://66.media.tumblr.com/e15628f48389145ed5a22b630d5b8152/tumblr_n3nzmiDmVf1t1zbplo1_500.jpg";
};

Seal.prototype = new Singer();

var seal = new Seal();

var SpiceGirls = function () {
  this.characterName = "The Spice Girls";
  this.health = 95;
  this.initiativeBonus = 45;
  this.skillBonus = 25;
  this.speedBonus = 40;
  this.image = "http://i.onionstatic.com/avclub/5761/23/16x9/640.jpg";
};

SpiceGirls.prototype = new Singer();

var spiceGirls = new SpiceGirls();

var Kanye = function () {
  this.characterName = "Kanye";
  this.health = 80;
  this.initiativeBonus = 50;
  this.skillBonus = 30;
  this.speedBonus = 35;
  this.image = "http://cdn.lifedaily.com/wp-content/uploads/2015/07/The-Gaurdian-.jpg";
};

Kanye.prototype = new Singer();

var kanye = new Kanye();

var LadyGaga = function () {
  this.characterName = "Lady Gaga";
  this.health = 100;
  this.initiativeBonus = 45;
  this.skillBonus = 25;
  this.speedBonus = 55;
  this.image = "http://allieiswired.com/wp-content/uploads/2012/11/Lady-Gaga-Wearing-A-Hot-Dog-Costume.jpg";
};

LadyGaga.prototype = new Singer();

var ladyGaga = new LadyGaga();

var characterObjects = [ jeffGoldblum, bettyWhite, paulyShore, billMurray, seal, spiceGirls, kanye, ladyGaga ];

module.exports = {

  Goldblum, BettyWhite, PaulyShore, BillMurray, Seal, SpiceGirls, Kanye, LadyGaga, characterObjects
};