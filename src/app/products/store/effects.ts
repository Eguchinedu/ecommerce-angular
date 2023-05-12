import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as ProductFetch from 'src/app/products/store/actions';
import { ProductService } from 'src/app/services/products.service';

@Injectable()
export class ProductEffect {
  constructor(private actions$: Actions, private productService: ProductService) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductFetch.getProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => ProductFetch.getProductSuccess({ products })),
          catchError((error) =>
            of(ProductFetch.getProductsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
