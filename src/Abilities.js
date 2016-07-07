"use strict";

///// new ability constructor/////
let newAbility = function() {
	this.ability = "Bare Hands";
	this.damage = 2;
};

///// other abilities/////

let badJokes = function() {
	this.ability = "Bad Jokes";
	this.damage = 8;
};

badJokes.prototype = new newAbility();

let throwShade = function() {
	this.ability = "Throw Shade";
	this.damage	= 8;	
};

throwShade.prototype = new newAbility();

let passiveAgg = function() {
	this.ability = "Passive Aggresion";
	this.damage	= 8;	
};

passiveAgg.prototype = new newAbility();

let opera = function() {
	this.ability = "Opera";
	this.damage	= 8;	
};

opera.prototype = new newAbility();

let sonicScreech = function() {
	this.ability = "Sonic Screech";
	this.damage	= 8;	
};

sonicScreech.prototype = new newAbility();

let cuteness = function() {
	this.ability = "Cuteness";
	this.damage	= 8;	
};

cuteness.prototype = new newAbility();

let dancing = function() {
	this.ability = "Dancing";
	this.damage	= 8;	
};

dancing.prototype = new newAbility();

let smugness = function() {
	this.ability = "Smugness";
	this.damage	= 8;	
};

smugness.prototype = new newAbility();



module.exports = {
	newAbility, badJokes, throwShade, opera, sonicScreech, cuteness, dancing, smugness
};