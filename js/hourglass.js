/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
class Hourglass {
  constructor() {
    this.limit = 0;
    this.isEven = false;
    this.present = 'unfilled';
    this.filled = '<div class="filled"></div>';
    this.empty = '<div class="empty"></div>';
  }

  setLimit(limit) {
    this.limit = limit;
    this.isEven = this.limit % 2 === 0;
  }

  togglePresentation() {
    if (this.present === 'unfilled') {
      this.present = 'filled';
      return this.renderFilled();
    } else {
      this.present = 'unfilled';
      return this.renderUnfilled();
    }
  }

  renderFilled() {
    let whiteSpaces = 0;
    let data = `<div class="row_container">${this.filled.repeat(this.limit)}</div>`;
    while ((whiteSpaces * 2) < (this.limit - 3)) {
      const marksCount = this.limit - 4 - (2 * whiteSpaces);
      data += `
      <div class="row_container">
        ${this.filled}${(this.empty.repeat(whiteSpaces))}${this.filled}
          ${this.empty.repeat(marksCount)}
        ${this.filled}${this.empty.repeat(whiteSpaces)}${this.filled}
      </div>`;
      whiteSpaces += 1;
    }

    if (this.isEven) whiteSpaces -= 1;

    while (whiteSpaces >= 0) {
      const marksCount = this.limit - 2 - (2 * whiteSpaces);
      data += `
      <div class="row_container">
        ${this.filled}${(this.empty.repeat(whiteSpaces))}
          ${this.filled.repeat(marksCount)}
        ${this.empty.repeat(whiteSpaces)}${this.filled}
      </div>`;
      whiteSpaces -= 1;
    }
    data += `<div class="row_container">${this.filled.repeat(this.limit)}</div>`;
    return data;
  }

  renderUnfilled() {
    let whiteSpaces = 0;
    let data = `<div class="row_container">${this.filled.repeat(this.limit)}</div>`;
    while ((whiteSpaces * 2) < (this.limit - 2)) {
      const marksCount = this.limit - 2 - (2 * whiteSpaces);
      data += `
      <div class="row_container">
        ${this.filled}${(this.empty.repeat(whiteSpaces))}
          ${this.filled.repeat(marksCount)}
        ${this.empty.repeat(whiteSpaces)}${this.filled}
      </div>`;
      whiteSpaces += 1;
    }

    whiteSpaces -= (this.isEven ? 1 : 2);

    while (whiteSpaces >= 0) {
      const marksCount = this.limit - 4 - (2 * whiteSpaces);
      data += `
      <div class="row_container">
        ${this.filled}${this.empty.repeat(whiteSpaces)}${this.filled}
          ${this.empty.repeat(marksCount)}
        ${this.filled}${this.empty.repeat(whiteSpaces)}${this.filled}
      </div>`;
      whiteSpaces -= 1;
    }

    data += `<div class="row_container">${this.filled.repeat(this.limit)}</div>`;

    return data;
  }
}

export default Hourglass;

