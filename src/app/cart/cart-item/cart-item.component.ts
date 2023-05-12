import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartActions from 'src/app/products/store/actions';
import { ProductGroup } from 'src/app/products/store/selectors';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() props!: ProductGroup;

  constructor(
    private store: Store

  ) {}
  ngOnInit(): void {
    
  }
  decreaseItem(item: ProductGroup) {
        this.store.dispatch(CartActions.removeFromCart(item.product));

  }
  removeItem(item: ProductGroup) {
        this.store.dispatch(CartActions.removeFromCart(item.product));
    
  }
  addToCart(item: ProductGroup) {
        this.store.dispatch(CartActions.addToCart(item.product));


  }
}
