export abstract class Book {
  name: string;
  ISBN: string;
  price: number;
  read = false;

  markAsRead() {
    this.read = true;
  }

  get isRead(): string {
    return this.read ? 'Yes' : 'No';
  }

}
