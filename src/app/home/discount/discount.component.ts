import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/types/products';
import { ProductService } from 'src/app/services/products.service';
import * as ProductFetch from 'src/app/products/store/actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/Type/app-state-interface';
import { isLoadingSelector, productSelector, errorSelector } from 'src/app/products/store/selectors';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
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
