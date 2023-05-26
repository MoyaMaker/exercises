const timerElement = document.getElementById("timer");
const inputTime = document.getElementById("minutesCountDown");

let intervalUpdate;

function startTimer() {
  let initTimer = inputTime.value * 60;
  let seconds = 0;

  intervalUpdate = setInterval(() => {
    const minutes = Math.floor(initTimer / 60);

    timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    initTimer--;

    if (minutes === 0 && seconds == 0) {
      stopInterval();
    }

    if (seconds > 0) {
      seconds--;
    }
    else {
      seconds = 59;
    }

  }, 1000);
}

function stopInterval() {
  clearInterval(intervalUpdate);
}