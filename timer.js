let timerId = null;
let timeLeft = 25 * 60;

function startTimer() {
  if (timerId) return;
  timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      timeLeft = 25 * 60;
    }
    document.getElementById('timer').textContent = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
  }, 1000);
}

function pauseTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function resetTimer() {
  pauseTimer();
  timeLeft = 25 * 60;
  document.getElementById('timer').textContent = '25:00';
}
