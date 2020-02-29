console.log("Up and running!");

const cards=["queen", "queen", "king", "King"];
const cardsInPlay=[];

function checkForMatch () {

	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a match!");
	}	else {
		alert("Sorry, try again");
	}

}

function flipCard(cardID, cardID2) {

	cardsInPlay.push(cards[cardID]);
	cardsInPlay.push(cards[cardID2]);

	console.log("User flipped " + cards[cardID]);
	console.log("User flipped " + cards[cardID2]);

	if (cardsInPlay.length === 2) {
		console.log("there's 2 cards");
	}

	checkForMatch();

}

flipCard(1, 2);