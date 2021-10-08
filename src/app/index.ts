import { Table } from 'console-table-printer';
import { Comics } from './comics';
import { Library } from './library';
import { Novel } from './novel';

const myLibrary = new Library();

myLibrary.addBook(new Novel('De soleil et de sang', 8.2, '2253079405', 'fiction'));
myLibrary.addBook(new Novel('Le douzième chapitre', 7.9, '2253079654', 'fiction'));
myLibrary.addBook(new Novel('Au bout de la nuit', 8.4, '2259874405', 'fiction'));

const spiderman1 = new Comics('Spider-man: un nouveau départ', 9.95, '08742875363', 'spiderman');
const spiderman2 = new Comics('Spider-man: Vénon', 9.95, '08742875345', 'spiderman');
spiderman2.markAsRead();
const hulk = new Comics('Hulk: Briseur de monde', 18, '0347938560', 'hulk');
myLibrary.addBooks(spiderman1, spiderman2, hulk);

// Novels
const novelTable = new Table({
  columns: [
    { name: 'name', alignment: 'left', color: 'blue' },
    { name: 'price', alignment: 'center' },
    { name: 'genre', alignment: 'left', color: 'green' },
    { name: 'isRead', alignment: 'center' }
  ],
  disabledColumns: [ 'ISBN', 'read' ]
});
novelTable.addRows(myLibrary.novels);

// Comics
const comicsTable = new Table({
  columns: [
    { name: 'name', alignment: 'left', color: 'blue' },
    { name: 'price', alignment: 'center' },
    { name: 'hero', alignment: 'left', color: 'red' },
    { name: 'isRead', alignment: 'center' }
  ],
  disabledColumns: [ 'ISBN', 'read' ]
});
comicsTable.addRows(myLibrary.comics);

// Print
console.log(`Novels`);
novelTable.printTable();
console.log(`Comics`);
comicsTable.printTable();
console.log(`My library value is ${myLibrary.value.toFixed(2)}€`);
