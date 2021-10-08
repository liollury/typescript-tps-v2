let library = [];

export function addBook(book) {
    library.push(book);
}

export function addBooks(...books) {
    library.push(...books);
}

export function getBooks() {
    return library;
}

export function deleteBookByISBN(ISBN) {
    const bookCount = library.length;
    library = library.filter((book) => book.ISBN === ISBN);
    return bookCount === library.length;
}

export function getValue() {
    return library.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
}
