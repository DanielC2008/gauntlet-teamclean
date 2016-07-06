(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

var Character = function () {

};

var Actor = function () {
  acting: true;
};

var Goldblum = function () {

};
},{}],3:[function(require,module,exports){
"use strict";

let initPlayer = require("./initPlayer");
let abilities = require("./Abilities");
let characters = require("./Character.js");

let playerInfo = {
  initPlayer, abilities, characters
};

module.exports = playerInfo;
},{"./Abilities":1,"./Character.js":2,"./initPlayer":5}],4:[function(require,module,exports){
"use strict";

let Players = require("./Player.js");

console.log("Player: ", Players.initPlayer.Player("jim"));


},{"./Player.js":3}],5:[function(require,module,exports){
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
},{}]},{},[4])


//# sourceMappingURL=bundle.js.map
