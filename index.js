const drumSelector = document.querySelectorAll('.drum');
const drumSelectorLength = drumSelector.length;

for (let i = 0; i < drumSelectorLength; i++) {
  drumSelector[i].addEventListener('click', function () {
    const button = this.innerText;
    makeSounds(button);
    makeAnimation(button);
  });
}

document.addEventListener('keydown', function (event) {
  makeSounds(event.key);
  makeAnimation(event.key);
});

function makeSounds(selectedButton) {
  switch (selectedButton) {
    case 'w':
      const kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case 'a':
      const crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case 's':
      const snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case 'd':
      const tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'j':
      const tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'k':
      const tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'l':
      const tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(`${selectedButton} is not assigned sound.`);
  }
}

function makeAnimation(selectedButton) {
  const assignButton = document.querySelector('.' + selectedButton);
  assignButton.classList.add('pressed');

  setTimeout(function () {
    assignButton.classList.remove('pressed');
  }, 100);
}
