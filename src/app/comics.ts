import { Book } from './book';

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
