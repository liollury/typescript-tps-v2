import { Book, Comics, Novel, NovelGenre } from './book';

export class Library {
    books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addBooks(...books: Book[]): void {
        this.books.push(...books);
    }

    deleteBookByISBN(isbn: string): boolean {
        const bookCount = this.books.length;
        this.books = this.books.filter((book: Book) => book.ISBN === isbn);
        return bookCount === this.books.length;
    }

    get value(): number {
        return this.books.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
    }

    get toReadBooks(): Book[] {
        return this.books.filter((book: Book) => !book.read);
    }

    get comics(): Comics[] {
        return this.books.filter((book: Book) => book instanceof Comics) as Comics[];
    }

    get novels(): Novel[] {
        return this.books.filter((book: Book) => book instanceof Novel) as Novel[];
    }

    getNovelsByGenre(genre: NovelGenre): Novel[] {
        return this.novels.filter((novel: Novel) => novel.genre === genre);
    }

    getComicsByHero(hero: String): Comics[] {
        return this.comics.filter((comics: Comics) => comics.hero === hero);
    }
}