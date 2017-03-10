var cards = [
	{
		rank:"queen",
		suit:"hearts",
		cardImage:"images/queen-of-hearts.png"
	},
	{
		rank:"queen",
		suit:"diamonds",
		cardImage:"images/queen-of-diamonds.png"
	},
	{
		rank:"king",
		suit:"hearts",
		cardImage:"images/king-of-hearts.png"
	},
	{
		rank:"king",
		suit:"diamonds",
		cardImage:"images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];
var resetButton = document.getElementsByTagName("button")[0];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
			resetButton.innerHTML = "Try Again!";
		}
	resetButton.disabled = false;
};

var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function () {
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src" , "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		resetButton.disabled = true;

	}
};

// reset game function
var resetBoard = function () {
	for (i=0; i<cards.length; i++) {
		document.getElementsByTagName("img")[i].setAttribute("src" , "images/back.png");
	}
	var cardsNumber = cardsInPlay.length;
	for (i=0; i<cardsNumber; i++) {
		cardsInPlay.pop();
	}
	resetButton.innerHTML = "Play Again!"
	resetButton.disabled = true;
	
};

// Play again button
var playAgain = function () {
	resetButton.addEventListener("click", resetBoard);
};


createBoard();
playAgain();
