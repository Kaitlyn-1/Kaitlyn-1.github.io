let xScore = 0;
let oScore = 0;
let turn = true;
$(".square").click(function () {
  let currentValue = $(this).text();
  console.log(currentValue, "before");
  if (currentValue !== "x" && currentValue !== "o") {
    if (turn === true) {
      $(this).text("x");
      turn = false;
    } else {
      $(this).text("o");
      turn = true;
    }
    checkWinner();
  }
});
function checkWinner() {
  let oneItem = $("#firstOne").text();
  let twoItem = $("#firstTwo").text();
  let threeItem = $("#firstThree").text();
  let fourItem = $("#secondOne").text();
  let fiveItem = $("#secondTwo").text();
  let sixItem = $("#secondThree").text();
  let sevenItem = $("#thirdOne").text();
  let eightItem = $("#thirdTwo").text();
  let nineItem = $("#thirdThree").text();
  // ++++++++++++++++++++++++++++++++++++++++++++++
  if (oneItem === "x" || oneItem === "o") {
    console.log("has value");
  }
  if (
    oneItem === twoItem &&
    oneItem === threeItem &&
    (oneItem === "x" || oneItem === "o")
  ) {
    $("#status").text(oneItem + " " + "wins");
    $(".rowOne").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(oneItem);
  }
  if (
    fourItem === fiveItem &&
    fourItem === sixItem &&
    (fourItem === "x" || fourItem === "o")
  ) {
    $("#status").text(fourItem + " " + "wins");
    $(".rowTwo").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(fourItem);
  }
  if (
    sevenItem === eightItem &&
    sevenItem === nineItem &&
    (sevenItem === "x" || sevenItem === "o")
  ) {
    $("#status").text(sevenItem + " " + "wins");
    $(".rowThree").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(sevenItem);
  }
  if (
    oneItem === fourItem &&
    oneItem === sevenItem &&
    (oneItem === "x" || oneItem === "o")
  ) {
    $("#status").text(oneItem + " " + "wins");
    $(".one").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(oneItem);
  }
  if (
    twoItem === fiveItem &&
    twoItem === eightItem &&
    (twoItem === "x" || twoItem === "o")
  ) {
    $("#status").text(twoItem + " " + "wins");
    $(".two").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(twoItem);
  }
  if (
    threeItem === sixItem &&
    threeItem === nineItem &&
    (threeItem === "x" || threeItem === "o")
  ) {
    $("#status").text(threeItem + " " + "wins");
    $(".three").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(threeItem);
  }
  if (
    oneItem === fiveItem &&
    oneItem === nineItem &&
    (oneItem === "x" || oneItem === "o")
  ) {
    $("#status").text(oneItem + " " + "wins");
    $(".diLeft").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(oneItem);
  }
  if (
    threeItem === fiveItem &&
    threeItem === sevenItem &&
    (threeItem === "x" || threeItem === "o")
  ) {
    $("#status").text(threeItem + " " + "wins");
    $(".diRight").css("background-color", "gray");
    $("#example2Modal").modal("show");
    scoreKeeper(threeItem);
  }
}
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});
$("#startGameBtn").click(function () {
  let value = $("#O").val() || "Guest 1";
  $("#player1Score").text(value + "'s" + " " + "Score");
  let value2 = $("#X").val() || "Guest 2";
  $("#player2Score").text(value2 + "'s" + " " + "Score");
  $("#exampleModal").modal("hide");
  $("#O").val(" ");
  $("#X").val(" ");
});
$("#yesBtn, #clearBoardBtn").click(function () {
  $(".square").empty();
  $(".square").css("background-color", "teal");
  $("#example2Modal").modal("hide");
});
function scoreKeeper(winner) {
  if (winner === "x") {
    xScore += 1;
  } else {
    oScore += 1;
  }
  $("#oScore").text(oScore);
  $("#xScore").text(xScore);
}