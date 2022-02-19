import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  // key-value mapping for movie purchase and purchase type (ticket vs. rental.)
  private _userCartItems!: Map<string, string>;

  public get userCartItems(): Map<string, string> {
    return this._userCartItems;
  }

  addToCart(title: string, purchaseType: string) {  // add movie and purchase type.
    this._userCartItems.set(title, purchaseType);
  }

  clearCart() {  // clear cart after transaction is completed.
    this._userCartItems.clear();
  }

  constructor() { }
}
