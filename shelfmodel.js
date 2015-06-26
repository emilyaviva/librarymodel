var Book = require('./bookmodel.js');

var Shelf = function(genre) {
  this.genre = genre;
  this.books = [];
}

Shelf.prototype.checkForBook = function(title, author) {
  var booksToReturn = [];
  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i].title == title) {
      booksToReturn.push(this.books[i]);
    }
  }
  if (booksToReturn.length === 1) {
    return booksToReturn[0];
  } else if (booksToReturn.length === 0) {
    console.log('No such book named "' + title + '" on the "' + this.genre + '" shelf');
    return;
  } else {
    if (!author) {
      console.log('Specify by author. ' + booksToReturn.length + ' books called "' + title + '" on the "' + this.genre + '" shelf');
      return;
    } else {
      for (var i = 0; i < booksToReturn.length; i++) {
        if (booksToReturn[i].author == author) {
          return booksToReturn[i];
        }
      }
      console.log('No such book "' + title + '" by author "' + author + '"');
      return;
    }
  }
}

Shelf.prototype.addBook = function(title, author) {
    this.books.push(new Book(title, author));
    return this.books;
}

Shelf.prototype.removeBook = function(title, author) {
  if (this.checkForBook(title, author)) {
    this.books.splice(this.books.indexOf(this.checkForBook(title, author)), 1);
    return this.books;
  }
}

module.exports = Shelf;