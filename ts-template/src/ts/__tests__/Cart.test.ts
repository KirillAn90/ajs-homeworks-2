import { Cart, CartItem } from './cart';

describe('Cart functionality', () => {
    let cart: Cart;
    let item1: CartItem;
    let item2: CartItem;

    beforeEach(() => {
        cart = new Cart();
        item1 = new CartItem(1, 'Item 1', 100, 2);
        item2 = new CartItem(2, 'Item 2', 200, 1);
        cart.addItem(item1);
        cart.addItem(item2);
    });

    test('should calculate total price correctly', () => {
        expect(cart.calculateTotalPrice()).toBe(400);
    });

    test('should calculate total price with discount correctly', () => {
        expect(cart.calculateTotalPriceWithDiscount(10)).toBe(360);
        expect(cart.calculateTotalPriceWithDiscount(0)).toBe(400);
        expect(cart.calculateTotalPriceWithDiscount(100)).toBe(0);
    });

    test('should throw error on invalid discount', () => {
        expect(() => cart.calculateTotalPriceWithDiscount(-1)).toThrow();
        expect(() => cart.calculateTotalPriceWithDiscount(101)).toThrow();
    });

    test('should remove item by id', () => {
        cart.removeItemById(1);
        expect(cart.getItems()).toHaveLength(1);
        expect(cart.getItems()[0]).toBe(item2);
    });

    test('should not remove non-existing item', () => {
        const initialLength = cart.getItems().length;
        cart.removeItemById(999);
        expect(cart.getItems().length).toBe(initialLength);
    });
});
