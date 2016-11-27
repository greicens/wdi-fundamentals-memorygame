console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen",
    cardTwo = "queen",
    cardThree = "king",
    cardFour = "king";

// if(cardOne === cardTwo){
//   window.alert('You found a match!');
// }else{
//   window.alert('Sorry, try again.');
// }
console.log("sanity checkone")
function createCard(){
  for (var i = 0; i < 4; i++) {
    var card = document.createElement("div");
    card.className = 'card';
    document.getElementById('game-board').appendChild(card);
  }
}

createCard();

console.log("sanity checkTwo")
