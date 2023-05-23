const homeName = document.getElementById("home");
const homeScore = document.getElementById("home-total-score");

const visitorName = document.getElementById("visitor");
const visitorScore = document.getElementById("visitor-total-score");

let home = new Team();
let visitor = new Team();

let inning = new Inning(1, Status.top);

function playBall() {
  home = new Team(homeName.value, 0);
  homeName.readOnly = true;
  homeName.ariaReadOnly = true;
  localStorage.setItem("home", home.toString());

  visitor = new Team(visitorName.value, 0);
  visitorName.readOnly = true;
  visitorName.ariaReadOnly = true;
  localStorage.setItem("visitor", visitor.toString());

  document.getElementById("startGame").disabled = true;

  localStorage.setItem("inning", inning.toString())
}

function addHome() {
  home.add();

  localStorage.setItem("home", home.toString());

  homeScore.innerHTML = home.score;
}

function removeHome() {
  home.remove();

  localStorage.setItem("home", home.toString());

  homeScore.innerHTML = home.score;
}

function resetHome() {
  home.reset();

  localStorage.setItem("home", home.toString());

  homeScore.innerHTML = home.score;
}

function addVisitor() {
  visitor.add();

  localStorage.setItem("visitor", visitor.toString());

  visitorScore.innerHTML = visitor.score;
}

function removeVisitor() {
  visitor.remove();

  localStorage.setItem("visitor", visitor.toString());

  visitorScore.innerHTML = visitor.score;
}

function resetVisitor() {
  visitor.reset();

  localStorage.setItem("visitor", visitor.toString());

  visitorScore.innerHTML = visitor.score;
}

function nextInning() {
  inning.next();

  setInning(inning);

  localStorage.setItem("inning", inning.toString())
}

function prevInning() {
  inning.prev();

  setInning(inning);

  localStorage.setItem("inning", inning.toString())
}

function resetInning() {
  inning.reset();

  setInning(inning);

  localStorage.setItem("inning", inning.toString())
}

function setInning(inning) {
  document.getElementById("inning-number").innerHTML = inning.inning;

  const topDiv = document.getElementById("top");
  const middleDiv = document.getElementById("middle");
  const bottomDiv = document.getElementById("bottom");

  // Fallback hide others flags
  topDiv.classList.add("hidden");
  middleDiv.classList.add("hidden");
  bottomDiv.classList.add("hidden");

  if (inning.status === Status.top) {
    topDiv.classList.remove("hidden");
  }
  if (inning.status === Status.middle) {
    middleDiv.classList.remove("hidden");
  }
  if (inning.status === Status.bottom) {
    bottomDiv.classList.remove("hidden");
  }
}

function restoreTeam(storageKey, inputName, scoreInput) {
  const storageTeam = localStorage.getItem(storageKey);

  const jsonTeam = JSON.parse(storageTeam);

  const team = new Team(jsonTeam.name, jsonTeam.score);

  inputName.value = team.name;
  scoreInput.innerHTML = team.score;

  return team;
}

window.onload = function () {
  home = restoreTeam("home", homeName, homeScore);
  visitor = restoreTeam("visitor", visitorName, visitorScore);

  const inningStorage = localStorage.getItem("inning");
  const inningJson = JSON.parse(inningStorage);
  inning = new Inning(inningJson.inning, inningJson.status);
  setInning(inning);
}