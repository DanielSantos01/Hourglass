import Hourglass from './hourglass.js';
import render from './handlers/render.js';
import rotate from './handlers/rotate.js';

(function() {
  const hourglass = new Hourglass();
  const buttonGenerate = document.querySelector('.generate');
  const buttonRotate = document.querySelector('.rotate');
  const textInput = document.querySelector('.input');

  buttonGenerate.addEventListener('click', render(hourglass, true));
  buttonRotate.addEventListener('click', rotate(hourglass));
  textInput.addEventListener('keydown', render(hourglass));
})()