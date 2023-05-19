import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  //appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //return items, collects items users added to the cart and returns each item
  getItems() {
    return this.items;
  }

  //clear cart items, returns empty array of items
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  constructor(private http: HttpClient) {}
}
