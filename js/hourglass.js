const limit = 21;
const isOdd = limit % 2 === 0;
const PREFILLED_MARKS = 2;
let whiteSpaces = 0;

console.log('#'.repeat(limit));

const renderUnfilled = () => {
  while ((whiteSpaces * 2) < (limit - 2)) {
    const marksCount = limit - PREFILLED_MARKS - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}${'#'.repeat(marksCount)}${' '.repeat(whiteSpaces)}#`);
    whiteSpaces += 1;
  }

  whiteSpaces -= (isOdd ? 1 : 2);

  while (whiteSpaces >= 0) {
    const marksCount = limit - 4 - (2 * whiteSpaces);
    console.log(`#${(' '.repeat(whiteSpaces))}#${' '.repeat(marksCount)}#${' '.repeat(whiteSpaces)}#`);
    whiteSpaces -= 1;
  }
};

renderUnfilled();

console.log('#'.repeat(limit));

