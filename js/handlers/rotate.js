import inputValidator from './inputValidator.js';

const rotate = (hourglass) => (evt) => {
  const result = inputValidator(evt, true);
  if (!result) return;
  document.querySelector('.hourglass').innerHTML = hourglass.togglePresentation();
};

export default rotate;
