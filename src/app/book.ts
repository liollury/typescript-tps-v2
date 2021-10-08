export function createBook(name, price, ISBN) {
    return {
        name,
        price,
        ISBN,
        read: false
    };
}
