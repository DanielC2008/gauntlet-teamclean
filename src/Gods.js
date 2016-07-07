"use-strict"
//create god function with base stats
let gods = []
const God = function(){
	this.characterName = null,
	this.skill = 50,
	this.strength = 50,
	this.speed = 50,
	this.initiative = 50
}
/// create greek function with greek specific stats
var Greek = function(name,health) {
	this.name = name
	this.origin = "Greek",
	this.health = health
}

Greek.prototype = new God();
//create persian fuction with Persian specific stats
var Persian = function(name,health) {
	this.name = name
	this.origin = "Persian",
	this.health = health
}

Persian.prototype = new God();
// create each enemy
var Zeus = new Greek("Zeus",110);
var Athena = new Greek("Athena",115);
var Artemis = new Greek("Artemis",120);
var Ares = new Greek("Ares", 110)
var Ra = new Persian("Ra",115);
var Amun = new Persian("Amun",110);
var Khepri = new Persian("Khepri", 100);
var Khnum = new Persian("Khnum",120);

gods.push(Athena);
gods.push(Zeus);
gods.push(Artemis);
gods.push(Ares);
gods.push(Ra);
gods.push(Amun);
gods.push(Khepri);
gods.push(Khnum);
