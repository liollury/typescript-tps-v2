import { Book } from './book';

export type NovelGenre = 'fiction' | 'historique' | 'memoire' | 'amour';

export class Novel extends Book {

  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly ISBN: string,
    public readonly genre: NovelGenre
  ) {
    super();
  }

}
