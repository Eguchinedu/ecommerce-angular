import { Component, OnInit } from '@angular/core';
import { IProduct } from './types/products';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../Type/app-state-interface';
import { productSelector, errorSelector, isLoadingSelector, ProductGroup, selectGroupedCartItems } from './store/selectors';
import * as ProductFetch from 'src/app/products/store/actions';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  products$: Observable<IProduct[]>;
  errorMessage$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.products$ = this.store.pipe(select(productSelector));
    this.errorMessage$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(ProductFetch.getProducts());
  }
}
