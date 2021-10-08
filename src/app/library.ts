import { Book, BookType } from './book';

type Library = Book[];
let library: Library = [];

export function addBook(book: Book) {
  library.push(book);
}

export function addBooks(...books: Book[]) {
  library.push(...books);
}

export function getBooks(): Book[] {
  return library;
}

export function deleteBookByISBN(ISBN: string): boolean {
  const bookCount = library.length;
  library = library.filter((book: Book) => book.ISBN === ISBN);
  return bookCount === library.length;
}

export function getValue(): number {
  return getBooks().reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
}

export function getNovels(): Book[] {
  return getBooks().filter((book: Book) => book.type === BookType.NOVEL);
}

export function getComics(): Book[] {
  return library.filter((book: Book) => book.type === BookType.COMICS);
}
