var Book = require('./bookmodel.js');
var Shelf = require('./shelfmodel.js');

var Library = function() {
  this.shelves = [];
}

Library.prototype.checkShelf = function(genre) {
  for (var i = 0; i < this.shelves.length; i++) {
    if (this.shelves[i].genre == genre) {
      return this.shelves[i];
    }
  }
}

Library.prototype.addShelf = function(genre) {
  if (!this.checkShelf(genre)) {
    this.shelves.push(new Shelf(genre));
    return this.shelves;
  } else {
    console.log('That shelf already exists');
  }
}

Library.prototype.removeShelf = function(genre) {
  if (this.checkShelf(genre)) {
    this.shelves.splice(this.shelves.indexOf(this.checkShelf(genre)), 1);
    return this.shelves;
  } else {
    console.log('No such shelf');
  }
}

Library.prototype.print = function() {
  if (this.shelves.length !== 0) {
    for (var i = 0; i < this.shelves.length; i++) {
      var currentShelf = this.shelves[i];
      if (currentShelf.books.length !== 0) {
        console.log('Shelf "' + currentShelf.genre + '":');
        for (var j = 0; j < currentShelf.books.length; j++) {
          var currentBook = currentShelf.books[j];
          console.log('  ' + currentBook.title + ', ' + currentBook.author);
        }
      } else {
        console.log('Shelf "' + currentShelf.genre + '": ** No books **');
      }
    }
  } else {
    console.log('*** No shelves ***');
  }
}

module.exports = Library;

// some test code

var myLibrary = new Library;
myLibrary.addShelf('fantasy');
var f = myLibrary.checkShelf('fantasy');
f.addBook('A Wizard of Earthsea', 'Ursula K. LeGuin');
f.addBook('The Hobbit', 'J.R.R. Tolkein');
f.addBook('Harry Potter', 'J.K. Rowling');
myLibrary.addShelf('history');
myLibrary.addShelf('biography');
var b = myLibrary.checkShelf('fantasy');
b.addBook('My Life', 'Bill Clinton');
b.addBook('My Life', 'Golda Meir');

myLibrary.print();

/* should output:

Shelf fantasy:
  Harry Potter, J.K. Rowling
  The Lord of the Rings, J.R.R. Tolkein
  The Left Hand of Darkness, Ursula K. LeGuin
Shelf history: ** No books **
Shelf biography:
  My Life, Golda Meir
  My Life, Bill Clinton

  */
