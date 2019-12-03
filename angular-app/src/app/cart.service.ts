import { Injectable, Input, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(
        private http: HttpClient
    ) { }

    items = [];
    @Output() itemsLength = 0;

    getItems() {
        this.itemsLength = this.items.length;
        return this.items;
    }

    addToCart(product) {
        this.items.push(product);
        this.itemsLength = this.items.length;
        console.log('ADICIONANDO', this.itemsLength);
    }

    clearCart() {
        this.items = [];
        this.itemsLength = 0;
        return this.items;
    }

    getShippingPrices() {
        return this.http.get('../assets/shipping.json');
    }

}
