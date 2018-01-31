console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];
var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cardId);
  var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    } else {
      console.log("Sorry, try again.");
checkForMatch();
    }}
  }
  flipCard(0);
  flipCard(2);
