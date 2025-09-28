export class CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

export class Cart {
    private items: CartItem[] = [];

    addItem(item: CartItem): void {
        this.items.push(item);
    }

    getItems(): CartItem[] {
        return this.items;
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    calculateTotalPriceWithDiscount(discount: number): number {
        if (discount < 0 || discount > 100) {
            throw new Error('Скидка должна быть в диапазоне от 0 до 100');
        }
        const total = this.calculateTotalPrice();
        return total * (1 - discount / 100);
    }

    removeItemById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}
