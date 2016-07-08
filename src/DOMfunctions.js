"use strict";

let Abilities = require("./Abilities");
let Characters = require("./Character");

let characterArray = Characters.characterObjects;
let user = [];

let populateDom = function(){
	for (let i = 0; i < characterArray.length; i ++){
		$('#characterContainer').append(`<button class="characterButton">${characterArray[i].characterName}</button>`);
	}
	$('#charSelectContainer:nth-child(n)').on("click", selectCharacter);
	$('#charSelectContainer').removeClass('hidden');
};

let selectCharacter = function(){
	let user1;
	let test = event.target.innerHTML;
		for(let i = 0; i < characterArray.length; i ++){
			let current = characterArray[i];
			if (test === current.characterName){
				user1 = current;
			}
		}
	$('#charSelectContainer').addClass('hidden');
	populateAbility(user1);
};

	// console.log(user1);

let populateAbility = function(user1) {
	if (user1.profession === "actor") {
		Abilities.actorArray.forEach(function(index) { 
			$('#abilityContainer').append(`<button class="abilityButton">${index.ability}</button>`);
		});
	}
	else {
		Abilities.singerArray.forEach(function(index) { 
			$('#abilityContainer').append(`<button class="abilityButton">${index.ability}</button>`);
		});
	}

	$('#charSelectAbility:nth-child(n)').on("click", selectAbility);
};

let selectAbility = function() {

};

module.exports = {populateDom, selectCharacter, user};


// let selectCharacter = function(){
// 	let user1 = null;
// 	var buttons = document.querySelectorAll('.characterButton').;
// 	for(let i = 0; i < buttons.length; i ++){
// 		buttons[i].addEventListener("click", function(){
// 			let test = this.innerHTML;
// 			for(let i = 0; i < characterArray.length; i ++){
// 				let current = characterArray[i];
// 				if (test === current.characterName){
// 					user1 = current;
// 					user.push(user1);
// 				}
// 			}
// 		});
// 	}

// };