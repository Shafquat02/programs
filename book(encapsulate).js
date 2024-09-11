class Book {
  constructor(title, author, price) {
    this._title = title;
    this._author = author;
    this._price = price;
  }

  _applyDiscount(discountPercentage) {
    this._price *= (1 - discountPercentage / 100);
  }

  getPrice() {
    return this._price;
  }

  setDiscount(discountPercentage) {
    this._applyDiscount(discountPercentage);
  }

  getBookDetails() {
    return `Title: ${this._title}, Author: ${this._author}, Price: ${this._price}`;
  }
}

// Demonstration
const book = new Book('its ends with us:  collen hoover', 'David Flanagan', 164);
console.log(book.getBookDetails());

book.setDiscount(10);
console.log(book.getBookDetails());