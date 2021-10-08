import { BookType } from './book';

let library: { name: string, price: number, ISBN: string, type: BookType, read: boolean }[] = [];

export function addBook(book: { name: string, price: number, ISBN: string, type: BookType, read: boolean }) {
    library.push(book);
}

export function addBooks(...books: { name: string, price: number, ISBN: string, type: BookType, read: boolean }[]) {
    library.push(...books);
}

export function getBooks(): { name: string, price: number, ISBN: string, type: BookType, read: boolean }[] {
    return library;
}

export function deleteBookByISBN(ISBN: string): boolean {
    const bookCount = library.length;
    library = library.filter((book: { ISBN: string }) => book.ISBN === ISBN);
    return bookCount === library.length;
}

export function getValue(): number {
    return library.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
}

export function getNovels(): { name: string, price: number, ISBN: string, type: BookType, read: boolean }[] {
    return library.filter((book: {type: BookType}) => book.type === BookType.NOVEL);
}

export function getComics(): { name: string, price: number, ISBN: string, type: BookType, read: boolean }[] {
    return library.filter((book: {type: BookType}) => book.type === BookType.COMICS);
}