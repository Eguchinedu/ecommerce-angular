import { Component, OnInit } from '@angular/core';
import { IProduct } from './types/products';
import { Store, select } from '@ngrx/store';
import * as ProductFetch from 'src/app/products/store/actions';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, productSelector } from './store/selectors';
import { AppStateInterface } from '../Type/app-state-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;
  errorMessage$: Observable<string | null>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.products$ = this.store.pipe(select(productSelector));
    this.errorMessage$ = this.store.pipe(select(errorSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(ProductFetch.getProducts());
  }
}
