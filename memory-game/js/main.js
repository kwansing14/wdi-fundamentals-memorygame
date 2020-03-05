console.log("Up and running!");

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

function flipCard() {
	
	const cardId = this.getAttribute('data-id');
	//pushing the cards into the empty array
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	//revealing the cards
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	


	if (cardsInPlay.length === 2) {
		console.log("there's 2 cards");
		checkForMatch();
	}
}

function createBoard (){
	for(let i = 0; i<cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i)
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click',flipCard);
		
		}
}

createBoard();