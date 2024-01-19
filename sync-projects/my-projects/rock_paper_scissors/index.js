/*
TODO
-figure out if userChoice function should be broken down
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

let winFeedback = () =>
  (document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Win!!");

let lossFeedback = () =>
  (document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "You Lost!!");

let tieFeedback = () =>
  (document.getElementById("results").innerHTML = "Round#: " + round + "<br>" + "It's a tie!!");

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

  switch (userChoiceIndex) {
    case 0 /* picking Rock */:
      switch (cpuRandomNum) {
        case 0:
          tieFeedback();
          break;
        case 1:
          lossFeedback();
          break;
        case 2:
          winFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;
    case 1 /* picking Paper */:
      switch (cpuRandomNum) {
        case 0:
          winFeedback();
          break;
        case 1:
          tieFeedback();
          break;
        case 2:
          lossFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;
    case 2 /* picking Scissors */:
      switch (cpuRandomNum) {
        case 0:
          lossFeedback();
          break;
        case 1:
          winFeedback();
          break;
        case 2:
          tieFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;

    default:
      alert(`ERROR:returned user value of ${cpuRandomNum} should not exist`);
      break;
  }

}

function randomChoice() {
  let userRandomNum = Math.floor(Math.random() * 3);
  let cpuRandomNum = Math.floor(Math.random() * 3);
  /* can have the same name as the one in userChoice function because they are both block scoped */

  document.getElementById("user-img").src = choicesArray[userRandomNum];
  document.getElementById("cpu-img").src = choicesArray[cpuRandomNum];
  round++;

  switch (userRandomNum) {
    case 0 /* picking Rock */:
      switch (cpuRandomNum) {
        case 0:
          tieFeedback();
          break;
        case 1:
          lossFeedback();
          break;
        case 2:
          winFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;
    case 1 /* picking Paper */:
      switch (cpuRandomNum) {
        case 0:
          winFeedback();
          break;
        case 1:
          tieFeedback();
          break;
        case 2:
          lossFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;
    case 2 /* picking Scissors */:
      switch (cpuRandomNum) {
        case 0:
          lossFeedback();
          break;
        case 1:
          winFeedback();
          break;
        case 2:
          tieFeedback();
          break;
        default:
          alert(`ERROR:returned cpu value of ${cpuRandomNum} should not exist`);
          break;
      }
      break;

    default:
      alert(`ERROR:returned user value of ${cpuRandomNum} should not exist`);
      break;
  }
}
