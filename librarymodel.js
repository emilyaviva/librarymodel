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
  for (var i = 0; i < this.shelves.length; i++) {
    console.log('Shelf ' + i.genre + ':');
    for (var j = 0; j < i.books.length; j++) {
      console.log(j.title + ', ' + j.author);
    }
  }
}





  


























