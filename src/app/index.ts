import { printTable, Table } from 'console-table-printer';

let library = [];

function createBook(name, price, ISBN) {
    return {
        name,
        price,
        ISBN,
        read: false
    };
}


library.push(createBook('De soleil et de sang', 8.2, '2253079405'));
library.push(createBook('Le douzième chapitre', 7.9, '2253079654'));
library.push(createBook('Au bout de la nuit', 8.4, 2259874405));

const spiderman1 = createBook('Spider-man: un nouveau départ', '9.95', '08742875363');
const spiderman2 = createBook('Spider-man: Vénon', 9.95, '08742875345');
const hulk = createBook('Hulk: Briseur de monde', 18, '0347938560');
library.push(spiderman1, spiderman2, hulk);

const cheapestBooks = library.filter((book) => parseFloat(book.price) < 10);
const cheapestBookNames = cheapestBooks.map((book) => book.name);
console.log(`les livres les moins cher sont : ${cheapestBookNames.join(', ')}`);
