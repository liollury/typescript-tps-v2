import * as myLibrary from './library';
import { createBook, BookType } from './book';
import { printTable, Table } from 'console-table-printer';


myLibrary.addBook(createBook('De soleil et de sang', 8.2, '2253079405', BookType.NOVEL));
myLibrary.addBook(createBook('Le douzième chapitre', 7.9, '2253079654', BookType.NOVEL));
myLibrary.addBook(createBook('Au bout de la nuit', 8.4, '2259874405', BookType.NOVEL));

const spiderman1 = createBook('Spider-man: un nouveau départ', 9.95, '08742875363', BookType.COMICS);
const spiderman2 = createBook('Spider-man: Vénon', 9.95, '08742875345', BookType.COMICS);
const hulk = createBook('Hulk: Briseur de monde', 18, '0347938560', BookType.COMICS);
myLibrary.addBooks(spiderman1, spiderman2, hulk);

const novelTable = new Table({
    columns: [
        {name: 'name', alignment: 'left', color: 'blue'},
        {name: 'price', alignment: 'center'},
        {name: 'read', alignment: 'center'}
    ],
    disabledColumns: ['ISBN']
})
novelTable.addRows(myLibrary.getNovels());
const comicsTable = new Table({
    columns: [
        {name: 'name', alignment: 'left', color: 'blue'},
        {name: 'price', alignment: 'center'},
        {name: 'read', alignment: 'center'}
    ],
    disabledColumns: ['ISBN']
})
comicsTable.addRows(myLibrary.getComics());
console.log(`Novels`);
novelTable.printTable();
console.log(`Comics`);
comicsTable.printTable();
console.log(`My library value is ${myLibrary.getValue().toFixed(2)}€`);