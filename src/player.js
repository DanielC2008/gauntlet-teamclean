"use strict";

let initPlayer = require("./initPlayer");
let abilities = require("./Abilities");
let characters = require("./Character.js");
const Dom = require("./DOMfunctions.js")

let playerInfo = {
  initPlayer, abilities, characters, Dom
};


module.exports = playerInfo;