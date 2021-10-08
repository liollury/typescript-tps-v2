let library = [];

library.push({name: 'De soleil et de sang', price: 8.2, ISBN: '2253079405'});
library.push({name: 'Le douzième chapitre', price: 7.9, ISBN: '2253079654'});
library.push({name: 'Au bout de la nuit', price: 8.4, ISBN: 2259874405});

const spiderman1 = {name: 'Spider-man: un nouveau départ', price: '9.95', ISBN: '08742875363'};
const spiderman2 = {name: 'Spider-man: Vénon', price: 9.95, ISBN: '08742875345'};
const hulk = {name: 'Hulk: Briseur de monde', price: 18, ISBN: '0347938560'};
library.push(spiderman1, spiderman2, hulk);

const cheapestBooks = library.filter((book) => parseFloat(book.price) < 10);
const cheapestBookNames = cheapestBooks.map((book) => book.name);
console.log(`les livres les moins cher sont : ${cheapestBookNames.join(', ')}`);
