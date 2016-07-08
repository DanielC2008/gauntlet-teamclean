"use strict";

let Abilities = require("./Abilities");
let Characters = require("./Character");

let characterArray = Characters.characterObjects;
let user = [];

let populateDom = function(){
	for (let i = 0; i < characterArray.length; i ++){
		$('#characterContainer').append(`<button class="characterButton">${characterArray[i].characterName}</button>`);
	}
	$('#charSelectContainer').on("click", selectCharacter);
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
	let currentArray;
	let container = $("#abilityContainer").removeClass("hidden");
	if (user1.profession === "actor") {
		Abilities.actorArray.forEach(function(index) {
		let button = $("<button>").addClass("abilityButton").html(`${index.ability}`);
			container.append(button);
			currentArray = Abilities.actorArray;
			button.click(function() {
				selectAbility(user1, currentArray);
			});
		});
	}
	else {
		Abilities.singerArray.forEach(function(index) {
		let button = $("<button>").addClass("abilityButton").html(`${index.ability}`);
			container.append(button);
			currentArray = Abilities.singerArray;
			button.click(function() {
				selectAbility(user1, currentArray);
			});
		});
	}
};

let selectAbility = function(user1, currentArray) {
	$("#abilityContainer").addClass("hidden");
	currentArray.forEach(function(index) {
		if (event.target.innerHTML === index.ability) {
			user1.ability = index;
			user.push(user1);
		}
	});
};

let addCharacterCards = function (player, enemy){
	$('#playerDiv').html(
		`
		<div class="playerName">${player.characterName}</div>
		<div class="playerHealth">${player.health}</div>
		<div class="playerSpeed">${player.speed+player.speedBonus}</div>
		<div class="playerAbility">${player.ability.ability}</div>
		`
		)

	$('#enemyDiv').html(
		`
		<div class="enemyName">${enemy.characterName}</div>
		<div class="enemyHealth">${enemy.health}</div>
		<div class="enemySpeed">${enemy.speed + enemy.speedBonus}</div>
		<div class="enemyAbility">${enemy.ability}</div>
		`
		)
}
module.exports = {populateDom, selectCharacter, user, addCharacterCards};