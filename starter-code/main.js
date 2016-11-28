console.log("JS file is connected to HTML! Woo!")
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function createCard(){
  for (var i = 0; i < cards.length; i++) {
    var card = document.createElement("div");
    card.className = 'card';
    document.getElementById('game-board').appendChild(card);
  }
}

createCard();

function createBoard(){

  for (var i = 0; i < cards.length; i++) {
    var cardElement = card[i];
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);
    cardElement.innerHTML = '<img src="img/kingCard.jpg" alt="King of Spades" />';
  }
}

createBoard();

// for (var i = 0; i < cards.length; i++) {
//   cardElement.addEventListener('click', isTwoCards);
//   cardElement.innerHTML = '<img src="kingCard" alt="King of Spades" />';.
// }

function isMatch(array){
  if(array[0] === array[1]){
    window.alert('You found a match!');
  }else{
    window.alert('Sorry, try again.');
  }

}

function isTwoCards(){
  cardsInPlay.push(this.getAttribute('data-card'));

  if(cardsInPlay.length === 2){
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
