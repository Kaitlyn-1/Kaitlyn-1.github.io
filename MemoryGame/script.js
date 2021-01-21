let cardCount = 0;
const cards = [
  { key: "A", url: "&#127841" },
  { key: "B", url: "&#127844" },
  { key: "C", url: "&#127846" },
  { key: "D", url: "&#127847" },
  { key: "E", url: "&#127848" },
  { key: "F", url: "&#127849" },
  { key: "G", url: "&#127850" },
  { key: "H", url: "&#127853" },
  { key: "I", url: "&#127856" },
  { key: "J", url: "&#127857" },
  { key: "K", url: "&#127858" },
  { key: "L", url: "&#127874" },
  { key: "M", url: "&#127865" },
  { key: "N", url: "&#127854" }
];
let difficulty = "easy";
function getCards() {
  if (difficulty === "easy") {
    return [...cards.slice(0, 3), ...cards.slice(0, 3)];
  }
  if (difficulty === "medium") {
    return [...cards.slice(0, 7), ...cards.slice(0, 7)];
  }
  if (difficulty === "hard") {
    return [...cards.slice(0, 10), ...cards.slice(0, 10)];
  }
  if (difficulty === "extraHard") {
    return [...cards.slice(0, 14), ...cards.slice(0, 14)];
  }
}
$("#restartBtn").click(function () {
  startNewGame();
});
$("#easyBtn").click(function () {
  difficulty = "easy";
  startNewGame();
});
$("#mediumBtn").click(function () {
  difficulty = "medium";
  startNewGame();
});
$("#hardBtn").click(function () {
  difficulty = "hard";
  startNewGame();
});
$("#extraHardBtn").click(function () {
  difficulty = "extraHard";
  startNewGame();
});
function cardReveal() {
  cardCount += 1;
  $("#point").empty();
  $("#point").text(cardCount);
  console.log(cardCount);
  $(this).hide();
  console.log($(".backgroundStyle:hidden"));
  let hiddenCards = $(".backgroundStyle:hidden");
  if (hiddenCards.length === 2) {
    let firstCard = hiddenCards[0].id;
    let secondCard = hiddenCards[1].id;
    console.log(firstCard, secondCard);
    if (firstCard === secondCard) {
      $(`.${hiddenCards[0].id}_back`).css("background-color", "#a3fc97");
      console.log("win");
      $(".backgroundStyle:hidden").remove();
    } else {
      setTimeout(function () {
        $(".backgroundStyle:hidden").show();
      }, 500);
    }
    if (hiddenCards === 0) {
      $(".backgroundStyle:hidden").hide();
    }
  }
}

function startNewGame() {
  cardCount = 0;
  $("#point").text("0");
  $("#littleDiv").empty();
  const finalCards = getCards();
  shuffle(finalCards);
  for (let i = 0; i < finalCards.length; i++) {
    let newListItem =
      "<div class='" +
      finalCards[i].key +
      "_back cardStyle'>" +
      finalCards[i].url +
      "<div id=" +
      finalCards[i].key +
      " class='backgroundStyle'></div></div>";
    $("#littleDiv").append(newListItem);
  }

  $(".backgroundStyle").click(cardReveal);
}

// const finalCards = [...cards, ...cards];

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

startNewGame();
// $(".backgroundStyle").click(function () {

//   $("#point").text(cardcount);
//   console.log(cardcount);
//   $(this).hide();
//   console.log($(".backgroundStyle:hidden"));
//   let hiddenCards = $(".backgroundStyle:hidden");
//   if (hiddenCards.length === 2) {
//     let firstCard = hiddenCards[0].id;
//     let secondCard = hiddenCards[1].id;
//     console.log(firstCard, secondCard);
//     if (firstCard === secondCard) {
//       $(`.${hiddenCards[0].id}_back`).css("background-color", "#a3fc97");
//       console.log("win");
//       $(".backgroundStyle:hidden").remove();
//     } else {
//       setTimeout(function () {
//         $(".backgroundStyle:hidden").show();
//       }, 500);
//     }
//     if (hiddenCards === 0) {
//       $(".backgroundStyle:hidden").hide();
//     }
//   }
// });