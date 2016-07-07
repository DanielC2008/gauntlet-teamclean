"use-strict"
let Abilities = require("./Abilities.js")
let Characters = require("./Character.js");
let characterArray = Characters.characterObjects;
let user = []
console.log("character",characterArray );

var populateDom = function(){
	for (let i = 0; i < characterArray.length; i ++){
	$('#characterContainer').append(`<button class="characterButton">${characterArray[i].characterName}</button>`)
	$('#charSelectContainer').removeClass('hidden');
	}
}
var addClickListeners = function(){
	let user1 = null;
	var buttons = document.querySelectorAll('.characterButton');
	for(let i = 0; i < buttons.length; i ++){
		buttons[i].addEventListener("click", function(){
			let test = this.innerHTML;
			for(let i = 0; i < characterArray.length; i ++){
				let current = characterArray[i];
				if (test === current.characterName){
					user1 = current;
					user.push(user1)
				}
			}
		})
	}

}





module.exports = { populateDom, addClickListeners, user}
