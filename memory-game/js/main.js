console.log("Up and running!");

//const cards=["queen", "queen", "king", "King"];
//change const to myArray
const cardsInPlay=[];
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
} ];



function checkForMatch () {

	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a match!");
	}	else {
		alert("Sorry, try again");
	}

}

function flipCard(cardID1, cardID2) {
	//pushing the cards into the empty array
	cardsInPlay.push(cards[cardID1].rank);

	cardsInPlay.push(cards[cardID2].rank);

	//revealing the cards
	console.log("User flipped " + cards[cardID1].rank);
	console.log(cards[cardID1].cardImage);
	console.log(cards[cardID1].suit);
	
	console.log("User flipped " + cards[cardID2].rank);
	console.log(cards[cardID2].cardImage);
	console.log(cards[cardID2].suit);

	if (cardsInPlay.length === 2) {
		console.log("there's 2 cards");
	}

	//function for checking match
	checkForMatch();

}

flipCard(1, 2);