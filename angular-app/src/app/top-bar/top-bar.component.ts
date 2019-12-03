import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    providers: [CartService]
})
export class TopBarComponent implements OnInit, OnChanges {

    @Input() itemsLength: number;

    constructor(
        private cartService: CartService
    ) {
        this.itemsLength = cartService.itemsLength;
    }

    ngOnInit() {
        console.log('VALOR INICIAL', this.itemsLength);
    }

    ngOnChanges() {
        this.itemsLength = this.cartService.itemsLength;
        console.log('ALTERADO', this.itemsLength);
    }



}
