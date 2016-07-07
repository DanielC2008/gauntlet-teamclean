
"use-strict"
let Characters = require("./Character.js");
let characterArray = Characters.characterObjects;
console.log("character",characterArray );

var populateDom = function(){
	for (let i = 0; i < characterArray.length; i ++){
	$('#characterContainer').append(`<button class="characterButton">${characterArray[i].characterName}</button>`)
	$('#charSelectContainer').removeClass('hidden');
	}
}
var addClickListeners = function(){
	let user1;
	var buttons = document.querySelectorAll('.characterButton');
	for(let i = 0; i < buttons.length; i ++){
		buttons[i].addEventListener("click", function(){
			let test = this.innerHTML;
			console.log("test",test );
			for(let i = 0; i < characterArray.length; i ++){
				let current = characterArray[i];
				if (test === current.characterName){
					user1 = current;
					console.log("user1",user1 );
				}
			}
		})
	}
	return user1
}



module.exports = { populateDom, addClickListeners,}