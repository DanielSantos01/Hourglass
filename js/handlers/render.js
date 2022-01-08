import inputValidator from './inputValidator.js';

const render = (hourglass, button = false) => (evt) => {
  const result = inputValidator(evt, button);
  if (!result) return;
  hourglass.setLimit(result);
  document.querySelector('.hourglass').innerHTML = hourglass.renderUnfilled();
};

export default render;
