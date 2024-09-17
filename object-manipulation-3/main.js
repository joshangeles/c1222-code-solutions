console.log('Lodash is loaded:', typeof _ !== 'undefined');
console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Player(name) {
  this.name = name;
  this.hand = [];
  this.countPoints = () => {
    this.points = 0;
    this.hand.forEach((card) => {
      if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
        this.points += 10;
      } else if (card.rank === 'Ace') {
        this.points += 11;
      } else {
        this.points += card.rank;
      }
    })
  }
}

function createPlayer(name) {
  return new Player(name);
}

function Card(rank, suit) {
  const card = {};
  card.rank = rank;
  card.suit = suit;
  return card;
}

let deck = [];

function generateSuit(suit) {
  for (let i = 2; i <= 14; i++) {
    switch (true) {
      case (i === 11):
        deck.push(Card('Jack', suit));
        break;

      case (i === 12):
        deck.push(Card('Queen', suit));
        break;

      case (i === 13):
        deck.push(Card('King', suit));
        break;

      case (i === 14):
        deck.push(Card('Ace', suit));
        break;

      default:
        deck.push(Card(i, suit));
        break;
    }
  }
}

const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
suits.forEach((suit) => generateSuit(suit));
deck = _.shuffle(deck);

function dealCards(player) {
  player.hand = [deck.shift(), deck.shift()]
}

function findWinner(player1, player2, player3, player4) {
  let players = [player1, player2, player3, player4];

  players.forEach((player) => player.countPoints());
  let sortedPlayers = _.sortBy(players, (player) => player.points);
  console.log('The winner is:', sortedPlayers[3]);
}
