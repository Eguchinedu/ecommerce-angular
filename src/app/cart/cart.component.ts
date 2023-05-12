import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/types/products';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductGroup, selectGroupedCartItems } from '../products/store/selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$: Observable<ProductGroup[]>;
  constructor(private store : Store) {
    this.products$ = this.store.select(selectGroupedCartItems)
  }

  ngOnInit(): void {
console.log(this.products$)
  }
}
