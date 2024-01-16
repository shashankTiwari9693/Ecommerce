import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {}

  addToCart(product: any) {
    console.log(product);

    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}
