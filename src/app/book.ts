export type NovelGenre = 'fiction' | 'historique' | 'memoire' | 'amour';

export abstract class Book {
    name: string;
    ISBN: string;
    price: number;
    read = false;

    markAsRead() {
        this.read = true;
    }

    get isReaded(): string {
        return this.read ? 'Yes' : 'No';
    }
}

export class Comics extends Book {
    hero: string;

    constructor(name: string, price: number, ISBN: string, hero: string) {
        super();
        this.name = name;
        this.price = price;
        this.ISBN = ISBN;
        this.hero = hero;
    }
}

export class Novel extends Book {
    genre: NovelGenre;


    constructor(name: string, price: number, ISBN: string, genre: NovelGenre) {
        super();
        this.name = name;
        this.price = price;
        this.ISBN = ISBN;
        this.genre = genre;
    }
}