export enum BookType {
  COMICS,
  NOVEL
}

export interface Book {
  name: string;
  price: number;
  ISBN: string;
  type: BookType;
  read: boolean;
}

export function createBook(name: string, price: number, ISBN: string, type: BookType): Book {
  return {
    name,
    price,
    ISBN,
    type,
    read: false
  };
}
