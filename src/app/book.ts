export enum BookType {
    COMICS,
    NOVEL
}
export function createBook(name: string, price: number, ISBN: string, type: BookType) {
    return {
        name,
        price,
        ISBN,
        type,
        read: false
    };
}
