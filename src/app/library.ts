import { BookType, Book } from './book';

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
  library = library.filter((book: { ISBN: string }) => book.ISBN === ISBN);
  return bookCount === library.length;
}

export function getValue(): number {
  return library.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
}

export function getNovels(): Book[] {
  return library.filter((book: { type: BookType }) => book.type === BookType.NOVEL);
}

export function getComics(): Book[] {
  return library.filter((book: { type: BookType }) => book.type === BookType.COMICS);
}
