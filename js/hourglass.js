const limit = 21;
const isEven = limit % 2 === 0;
let whiteSpaces = 0;

console.log('#'.repeat(limit));

const renderUnfilled = () => {
  while ((whiteSpaces * 2) < (limit - 2)) {
    const marksCount = limit - 2 - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}${'#'.repeat(marksCount)}${' '.repeat(whiteSpaces)}#`);
    whiteSpaces += 1;
  }

  whiteSpaces -= (isEven ? 1 : 2);

  while (whiteSpaces >= 0) {
    const marksCount = limit - 4 - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}#${' '.repeat(marksCount)}#${' '.repeat(whiteSpaces)}#`);
    whiteSpaces -= 1;
  }
};

const renderFilled = () => {
  while ((whiteSpaces * 2) < (limit - 3)) {
    const marksCount = limit - 4 - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}#${' '.repeat(marksCount)}#${' '.repeat(whiteSpaces)}#`);
    whiteSpaces += 1;
  }

  if (isEven) whiteSpaces -= 1;

  while (whiteSpaces >= 0) {
    const marksCount = limit - 2 - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}${'#'.repeat(marksCount)}${' '.repeat(whiteSpaces)}#`);
    whiteSpaces -= 1;
  }
};

renderFilled();

console.log('#'.repeat(limit));

