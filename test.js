var Library = require('./librarymodel.js');

var myLibrary = new Library;
myLibrary.addShelf('fantasy');
var f = myLibrary.checkShelf('fantasy');
f.addBook('A Wizard of Earthsea', 'Ursula K. LeGuin');
f.addBook('The Hobbit', 'J.R.R. Tolkein');
f.addBook('Harry Potter', 'J.K. Rowling');
myLibrary.addShelf('history');
myLibrary.addShelf('biography');
var b = myLibrary.checkShelf('biography');
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
