$("#dealBtn").click(deal);
const suits = ["spades", "diamonds", "hearts", "clovers"];
const numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let allCards = [];
let gameOver = false;
// for (let i = 0; i < suits.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     const Cards = {
//       suit: suits[i],
//       number: numbers[j]
//     };
//     allCards.push(Cards);
//   }
// }

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    let value = parseInt(numbers[j]);
    if (numbers[j] == "J" || numbers[j] == "Q" || numbers[j] == "K") {
      value = 10;
    }
    if (numbers[j] == "A") {
      value = 11;
    }

    const Cards = {
      suit: suits[i],
      number: numbers[j],
      value: value
    };
    allCards.push(Cards);
  }
}
function shuffle(myDeck) {
  if (myDeck.length > 0) {
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * myDeck.length);
      let location2 = Math.floor(Math.random() * myDeck.length);
      let tmp = myDeck[location1];
      myDeck[location1] = myDeck[location2];
      myDeck[location2] = tmp;
    }
  }
}

shuffle(allCards);
const icon = {
  hearts: "&hearts;",
  spades: "&spades;",
  diamonds: "&diams;",
  clovers: "&clubs;"
};
let usedCards = [];
function startNewGame() {
  usedCards = usedCards.concat(player1.hand);
  gameOver = false;
  usedCards = usedCards.concat(player2.hand);

  $("#hand_1").empty();
  $("#hand_2").empty();
  player1.hand = [];
  player2.hand = [];
  $(`#player${currPlayer}`).removeClass("active");
  currPlayer = 1;
  $("#status").empty();
  $("#hitBtn, #stayBtn").removeClass("disabled");
  $("#hitBtn, #stayBtn").prop("disabled", false);
}
let currPlayer = 1;
function deal() {
  showBank();
  startNewGame();
  $("#btnsBet").show();
  $("#status").text("Please choose your bet before continuing!!");
}
function passCard() {
  const currCard1 = allCards.pop();
  const currCard12 = allCards.pop();
  const currCard2 = allCards.pop();
  const currCard22 = allCards.pop();
  player1.hand.push(currCard1);
  player1.hand.push(currCard12);
  player2.hand.push(currCard2);
  player2.hand.push(currCard22);
  renderCard(currCard1, 1);
  renderCard(null, 2);
  renderCard(currCard2, 2);
  renderCard(currCard12, 1);
  $(`#player${currPlayer}`).addClass("active");
  setTotal();
  checkBlackjack();
  drawScore();
  showCardCount();
}
function checkBlackjack() {
  if (player1.total === 21) {
    $("#status").text("Player 1 Blackjack");
    // player1.score += 2;
    disableGame();
    mula(1);
    gameOver = true;
  }
  if (player2.total === 21) {
    $("#status").text("Dealer Blackjack");
    // player2.score += 2;
    disableGame();
    mula(2);
    gameOver = true;
  }
  if (player1.total === 21 && player2.total === 21) {
    $("#status").text("Double Blacjack");
    // player1.score += 2;
    // player2.score += 2;
    disableGame();
    gameOver = true;
  }
}

const player1 = {
  hand: [],
  total: [0],
  name: "player1",
  bet: 0,
  bank: 100
};
const player2 = {
  hand: [],
  total: [0],
  name: "player2",
  bank: 1000
};
const suitColors = {
  diamonds: "red",
  hearts: "red",
  spades: "black",
  clovers: "black"
};

const allPlayers = { player1, player2 };
function renderCard(card, player) {
  if (card) {
    const cardImage = $("<div>")
      .html(
        `<div class="cardNumber ${suitColors[card.suit]}
      ">${card.number}</div><div class="cardSuit  ${suitColors[card.suit]}">${
          icon[card.suit]
        }</div>`
      )
      .addClass("cardsStyle");
    $(`#hand_${player}`).append(cardImage);
  } else {
    const cardImage = $("<div>").addClass("cardsStyle");
    $(`#hand_${player}`).append(cardImage);
  }
}
$("#hitBtn").click(hitMe);
$("#stayBtn").click(function () {
  if (currPlayer === 1) {
    $(`#player${currPlayer}`).removeClass("active");
    currPlayer += 1;
    $(`#player${currPlayer}`).addClass("active");
    computerTurn();
  }
});

function setTotal() {
  let totalValue = 0;
  for (i = 0; i < player1.hand.length; i++) {
    let cardValue = player1.hand[i].value;
    if (totalValue > 10 && cardValue === 11) {
      cardValue = 1;
    }
    totalValue += cardValue;
  }

  player1.total = totalValue;
  totalValue = 0;
  for (i = 0; i < player2.hand.length; i++) {
    let cardValue = player2.hand[i].value;
    if (totalValue > 10 && cardValue === 11) {
      cardValue = 1;
    }
    totalValue += cardValue;
  }
  player2.total = totalValue;
}
function disableGame() {
  $("#hitBtn, #stayBtn").addClass("disabled");
  $("#hitBtn, #stayBtn").prop("disabled", true);
}
function checkBust() {
  if (allPlayers[`player${currPlayer}`].total > 21) {
    gameOver = true;
    disableGame();
    if (currPlayer === 1) {
      // player2.score += 1;
      mula(2);
      $("#status").text("Player 1 Busted");
    } else {
      // player1.score += 1;
      mula(1);
      $("#status").text("Dealer Busted");
    }
    drawScore();
  }
}
function checkWinner() {
  console.log("checkWinner player1", player1);
  console.log("checkWinner player2", player2);
  if (player1.total > player2.total) {
    $("#status").text("Player 1 Wins");

    mula(1);
  }
  if (player1.total < player2.total) {
    $("#status").text("Dealer Wins");

    mula(2);
  }
  if (player1.total === player2.total) {
    $("#status").text("It was a tie");
  }
  drawScore();
  disableGame();
  showBank();
}
function drawScore() {
  $("#point_1").text(player1.score);
  $("#point_2").text(player2.score);
}
function showCardCount() {
  const cardLength = allCards.length;
  $("#reshuffle").text(cardLength);
}
$("#shuffleBtn").click(function () {
  shuffle(usedCards);

  if (usedCards.length > 0) {
    allCards = allCards.concat(usedCards);
  }
  showCardCount();
  usedCards = [];
  // console.log(allCards)
});
function hitMe() {
  const hitCard = allCards.pop();
  renderCard(hitCard, currPlayer);
  allPlayers[`player${currPlayer}`].hand.push(hitCard);
  setTotal();
  checkBust();
  showCardCount();
}
function computerTurn() {
  $("#hand_2").empty();
  const card = player2.hand[0];
  const card2 = player2.hand[1];

  renderCard(card2, 2);
  renderCard(card, 2);
  disableGame();
  console.log(player2);
  while (player2.total <= 16) {
    hitMe();
  }
  console.log("hitMe finished");
  checkBust();
  if (!gameOver) {
    console.log("checking winner");
    checkWinner();
  }
}
$("#btnsBet").hide();
$(".bet").click(function () {
  console.log("value is: ", $(this).val());
  player1.bank -= Number($(this).val());
  player1.bet = Number($(this).val());
  console.log(player1);
  passCard();
  if (gameOver === false) {
    $("#status").text("Now,  either click hit or stay");
  }
  showBank();
  $("#btnsBet").hide();
});
function mula(winner) {
  console.log("calling mula with: ", winner);
  console.log("player1.bet", player1.bet);
  if (winner === 1) {
    player1.bank += player1.bet;
    player1.bank += player1.bet;
    player2.bank -= player1.bet;
    player1.bet = 0;
  } else {
    player2.bank += player1.bet;
    player1.bet = 0;
  }
  console.log("mula player1.bank", player1.bank);
  console.log("mula player2.bank", player2.bank);
}
function showBank() {
  console.log(player1.bank);
  $("#bank_1").text("Player 1 Money:" + " " + player1.bank);
  $("#bank_2").text("Dealer Money:" + " " + player2.bank);
}