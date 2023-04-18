/*
TODO
*fix game logic in choice functions
*figure out if userChoice function should be broken down
-replace & import missing images(broken links causing issues)
-get correct image sizing
-make images responsive
*get design with Anais

*/

let rockImg = "./images/the-rock-flex.jpg";

let paperImg = "./images/toilet-paper.jpg";

let scissorsImg = "./images/caesars.jpg";

document.getElementById("user-img").width = 405;
document.getElementById("cpu-img").width = 405;

let choicesArray = [rockImg, paperImg, scissorsImg];

let round = 0;

function userChoice(id) {
  let result = 0;
  switch (id) {
    case "the-rock":
      document.getElementById("user-img").src = rockImg;
      result = rockImg;
      break;
    case "the-paper":
      document.getElementById("user-img").src = paperImg;
      result = paperImg;
      break;
    case "the-scissors":
      document.getElementById("user-img").src = scissorsImg;
      result = scissorsImg;
      break;
  }

  let cpuRandomNum = Math.floor(Math.random() * 3);

  document.getElementById("cpu-img").src = choicesArray[cpuRandomNum];

  round++;

  let userChoiceIndex = choicesArray.indexOf(result);

  if (
    userChoiceIndex<cpuRandomNum && (userChoiceIndex!==choicesArray.length-1 && cpuRandomNum!==0)
  ) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Lost!!"; //loss
  } else if (
    userChoiceIndex > cpuRandomNum ||
    (userChoiceIndex == 0 && cpuRandomNum == choicesArray.length - 1)
  ) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Win!!"; //win
  } else {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "It's a tie!!"; //tie
  }
}

function randomChoice() {
  let userRandomNum = Math.floor(Math.random() * 3);
  let cpuRandomNum = Math.floor(Math.random() * 3);
  /* can have the same name as the one in userChoice function because they are both block scoped */

  document.getElementById("user-img").src = choicesArray[userRandomNum];
  document.getElementById("cpu-img").src = choicesArray[cpuRandomNum];
  round++;

  if (
    (userRandomNum == choicesArray.length - 1 && cpuRandomNum == 0) ||
    userRandomNum < cpuRandomNum
  ) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Lost!!"; //loss
  } else if (userRandomNum > cpuRandomNum) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Win!!"; //win
  } else {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "It's a tie!!"; //tie
  }
}
