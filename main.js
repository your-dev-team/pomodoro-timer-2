document.getElementById('startPauseBtn').addEventListener('click', handleStartPauseClick);
document.getElementById('resetBtn').addEventListener('click', handleResetClick);

function handleStartPauseClick() {
  if (this.textContent === 'Start') {
    this.textContent = 'Pause';
    startTimer();
  } else {
    this.textContent = 'Start';
    pauseTimer();
  }
}

function handleResetClick() {
  document.getElementById('startPauseBtn').textContent = 'Start';
  resetTimer();
}
