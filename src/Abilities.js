"use strict";

///// NEW ABILITY CONSTRUCTOR /////
let Ability = function() {
	this.ability = "Bare Hands";
	this.damage = 2;
	this.type = null;
};

///// ABILITY TYPES ///////
let actorAbility = function() {
	this.type = "actor";
};

actorAbility.prototype = new Ability();

let singerAbility = function() {
	this.type = "singer";
};

singerAbility.prototype = new Ability();

///// ACTOR ABILITIES /////
let badJokes = function() {
	this.ability = "Bad Jokes";
	this.damage = 8;
};
badJokes.prototype = new actorAbility();

let throwShade = function() {
	this.ability = "Throw Shade";
	this.damage	= 8;	
};
throwShade.prototype = new actorAbility();

let passiveAgg = function() {
	this.ability = "Passive Aggresion";
	this.damage	= 8;	
};
passiveAgg.prototype = new actorAbility();


/////SINGER ABILITIES/////////
let opera = function() {
	this.ability = "Opera";
	this.damage	= 8;	
};
opera.prototype = new singerAbility();

let sonicScreech = function() {
	this.ability = "Sonic Screech";
	this.damage	= 8;	
};
sonicScreech.prototype = new singerAbility();

let dancing = function() {
	this.ability = "Dancing";
	this.damage	= 8;	
};
dancing.prototype = new singerAbility();


/////BETTY WHITE////////	
let cuteness = function() {
	this.ability = "Cuteness";
	this.damage	= 15;	
};
cuteness.prototype = new actorAbility();

/////KANYE WEST////////
let smugness = function() {
	this.ability = "Smugness";
	this.damage	= 2;	
};
smugness.prototype = new singerAbility();

let newBadJokes = new badJokes();
let newThrowShade = new throwShade();
let newPassiveAgg = new passiveAgg();
let newSonicScreech = new sonicScreech();
let newDancing = new dancing();
let newOpera = new opera();
let smug = new smugness();
let cute = new cuteness();

let actorArray = [newBadJokes, newThrowShade, newPassiveAgg, cute]; 
let singerArray = [newSonicScreech, newDancing, newOpera, smug]; 


module.exports = {
	badJokes, throwShade, opera, sonicScreech, cuteness, dancing, smugness, actorArray, singerArray
};