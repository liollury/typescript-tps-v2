export function createBook(name: string, price: number, ISBN: string) {
    return {
        name,
        price,
        ISBN,
        read: false
    };
}
