console.log("Up and running!");

const cards=["queen", "queen", "king", "King"];
const cardsInPlay=[];
let cardOne;

cardOne = cards[1];
cardsInPlay.push(cardOne);

console.log(cardsInPlay[0]);
console.log("User Flipped queen");

cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User Flipped king");

if (cardsInPlay.length === 2) {
	console.log("there's 2 cards");
}

if (cardsInPlay[0] == cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}