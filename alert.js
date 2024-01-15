let context = new (window.AudioContext || window.webkitAudioContext)();

function playAlertSound() {
  let oscillator = context.createOscillator();
  oscillator.type = 'square';
  oscillator.frequency.value = 300;
  oscillator.connect(context.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 1000);
}
