const inputValidator = (evt, byButton = false) => {
  if (!byButton && evt.key !== 'Enter') return;
  const textInput = document.querySelector('.input');
  const data = textInput.value;
  if (!Number(data)) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
    document.querySelector('.error').innerHTML = 'The inserted data is not an integer number';
    return false;
  }
  
  if (Number(data) % 1 !== 0 || Number(data) < 20) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
    document.querySelector('.error').innerHTML = 'The number must be an interger greater than or equal 20';
    return false;
  }

  return Number(data);
};

export default inputValidator;
