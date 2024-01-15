    document.getElementById('startPauseBtn').addEventListener('click', handleStartPauseClick);
document.getElementById('resetBtn').addEventListener('click', handleResetClick);

let taskInput = document.getElementById('taskInput');
let activeTask = document.getElementById('activeTask');

function handleStartPauseClick() {
  if (this.textContent === 'Start') {
    this.textContent = 'Pause';
    activeTask.textContent = 'Active Task: ' + taskInput.value;
    startTimer();
  } else {
    this.textContent = 'Start';
    pauseTimer();
  }
}

function handleResetClick() {
  document.getElementById('startPauseBtn').textContent = 'Start';
  resetTimer();
  activeTask.textContent = '';
}

    