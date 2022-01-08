/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
class Hourglass {
  constructor() {
    this.limit = 0;
    this.isEven = false;
  }

  setLimit(limit) {
    this.limit = limit;
    this.isEven = this.limit % 2 === 0;
  }

  renderFilled() {
    let whiteSpaces = 0;
    while ((whiteSpaces * 2) < (this.limit - 3)) {
      const marksCount = this.limit - 4 - (2 * whiteSpaces);
      console.log(`#${(' '.repeat(whiteSpaces))}#${' '.repeat(marksCount)}#${' '.repeat(whiteSpaces)}#`);
      whiteSpaces += 1;
    }

    if (this.isEven) whiteSpaces -= 1;

    while (whiteSpaces >= 0) {
      const marksCount = this.limit - 2 - (2 * whiteSpaces);
      console.log(`#${(' '.repeat(whiteSpaces))}${'#'.repeat(marksCount)}${' '.repeat(whiteSpaces)}#`);
      whiteSpaces -= 1;
    }
  }

  renderUnfilled() {
    let whiteSpaces = 0;
    while ((whiteSpaces * 2) < (this.limit - 2)) {
      const marksCount = this.limit - 2 - (2 * whiteSpaces);
      console.log(`#${(' '.repeat(whiteSpaces))}${'#'.repeat(marksCount)}${' '.repeat(whiteSpaces)}#`);
      whiteSpaces += 1;
    }

    whiteSpaces -= (this.isEven ? 1 : 2);

    while (whiteSpaces >= 0) {
      const marksCount = this.limit - 4 - (2 * whiteSpaces);
      console.log(`#${(' '.repeat(whiteSpaces))}#${' '.repeat(marksCount)}#${' '.repeat(whiteSpaces)}#`);
      whiteSpaces -= 1;
    }
  }
}

export default Hourglass;

