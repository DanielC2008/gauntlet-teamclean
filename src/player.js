"use strict";

let initPlayer = require("./initPlayer");
let abilities = require("./Abilities");
let characters = require("./Character");
let Dom = require("./DOMfunctions");

let playerInfo = {
  initPlayer, abilities, characters, Dom
};


module.exports = playerInfo;