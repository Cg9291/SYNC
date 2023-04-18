/*
TODO
-replace & import missing images(broken links causing issues)
-get correct image sizing
-make images responsive
-get design with Anais

*/

let rockImg =
  "./images/the-rock-flex.jpg";

let paperImg =
  "./images/toilet-paper.jpg";

let scissorsImg =
  "./images/caesars.jpg";

document.getElementById("user-img").width = 405;
document.getElementById("cpu-img").width = 405;

let numRef = [rockImg, paperImg, scissorsImg];

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

  let randomNum = Math.floor(Math.random() * 3);

  document.getElementById("cpu-img").src = numRef[randomNum];

  round++;

  if (
    (numRef.indexOf(result) == numRef.length - 1 && randomNum == 0) ||
    numRef.indexOf(result) < randomNum
  ) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Lost!!"; //loss
  } else if (numRef.indexOf(result) > randomNum) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Win!!"; //win
  } else {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "It's a tie!!"; //tie
  }
}

function randomChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let randomNumCpu = Math.floor(Math.random() * 3);

  document.getElementById("user-img").src = numRef[randomNum];
  document.getElementById("cpu-img").src = numRef[randomNumCpu];
  round++;

  if ((randomNum == numRef.length - 1 && randomNumCpu == 0) || randomNum < randomNumCpu) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Lost!!"; //loss
  } else if (randomNum > randomNumCpu) {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Win!!"; //win
  } else {
    document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "It's a tie!!"; //tie
  }
}
