
const God = function(){
	this.characterName = null,
	this.skill = 50,
	this.strength = 50,
	this.speed = 50,
	this.initiative = 50
}


var Greek = function(name,health,strength,speed) {
	this.name = name
	this.origin = "Greek",
	this.health = health,
	this.strengthBonus = strength,
	this.speedBonus = speed
}
Greek.prototype = new God();
var Zeus = new Greek("Zeus",45,65,10);
var Athena = new Greek("Athena",50,40,15);
var Artemis = new Greek("Artemis",40,60,20);
console.log("Zeus",Zeus );
console.log("Athena",Athena );
console.log("Artemis",Artemis );


// var player = function(){

// }
// var actor = function(){

// }
//
// let newAbility = function(x,y){
// 	this.ability = x,
// 	this.damage = y
// }
// let badJokes = new newAbility("Bad Jokes", 5);
//
let newAbility = function() {
 	this.ability = "Bare Hands";
 	this.damage = 2;
 };

 ///// other abilities/////

 let badJokes = function() {
 	this.ability = "Bad Jokes";
 	this.damage	= 8;
 };

