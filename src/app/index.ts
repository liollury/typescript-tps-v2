import * as myLibrary from './library';
import { createBook } from './book';
import { printTable, Table } from 'console-table-printer';


myLibrary.addBook(createBook('De soleil et de sang', 8.2, '2253079405'));
myLibrary.addBook(createBook('Le douzième chapitre', 7.9, '2253079654'));
myLibrary.addBook(createBook('Au bout de la nuit', 8.4, 2259874405));

const spiderman1 = createBook('Spider-man: un nouveau départ', '9.95', '08742875363');
const spiderman2 = createBook('Spider-man: Vénon', 9.95, '08742875345');
const hulk = createBook('Hulk: Briseur de monde', 18, '0347938560');
myLibrary.addBooks(spiderman1, spiderman2, hulk);

const table = new Table({
    columns: [
        {name: 'name', alignment: 'left', color: 'blue'},
        {name: 'price', alignment: 'center'},
        {name: 'read', alignment: 'center'}
    ],
    disabledColumns: ['ISBN']
})
table.addRows(myLibrary.getBooks());
console.log(`Library`);
table.printTable();
console.log(`My library value is ${myLibrary.getValue().toFixed(2)}€`);