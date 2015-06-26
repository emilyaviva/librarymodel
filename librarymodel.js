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
