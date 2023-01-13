let scoreHome = 0;
let scoreGuest = 0;
let totalHome = document.getElementById("score-home");
let totalGuest = document.getElementById("score-guest");

function addOne() {
  scoreHome += 1;
  totalHome.innerText = scoreHome;
}

function addTwo() {
  scoreHome += 2;
  totalHome.innerText = scoreHome;
}

function addThree() {
  scoreHome += 3;
  totalHome.innerText = scoreHome;
}

function addOneG() {
  scoreGuest += 1;
  totalGuest.innerText = scoreGuest;
}

function addTwoG() {
  scoreGuest += 2;
  totalGuest.innerText = scoreGuest;
}

function addThreeG() {
  scoreGuest += 3;
  totalGuest.innerText = scoreGuest;
}

function reset() {
  scoreHome = 0;
  scoreGuest = 0;
  totalHome.innerText = scoreHome;
  totalGuest.innerText = scoreGuest;
}
