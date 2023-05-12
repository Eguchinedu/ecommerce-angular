import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/Type/app-state-interface';
import { IProduct } from '../types/products';


export interface ProductGroup {
  product: IProduct;
  count: number;
}
export const selectFeature = (state: AppStateInterface) => state.products;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const productSelector = createSelector(
  selectFeature,
  (state) => state.products
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);


export const selectCountProducts = createSelector(
  createFeatureSelector('cartitems'),
  (state: IProduct[]) => {
    return state.length;
  }
);

// export const selectTotalPrice = createSelector(
//   createFeatureSelector('cartEntries'),
//   (state: IProduct[]) => {
//     var totalPrice = 0;
//     state.forEach((p) => (totalPrice += p.price));
//     return totalPrice;
//   }
// );

export const selectGroupedCartItems = createSelector(
  createFeatureSelector('cartitems'),
  (state: IProduct[]) => {
    var map: Map<number, ProductGroup> = new Map();

    state.forEach((p) => {
      if (map.get(p.id)) {
        (map.get(p.id) as ProductGroup).count++;
      } else {
        map.set(p.id, { product: p, count: 1 });
      }
    });

    const sortedMap = new Map([...map.entries()].sort());
    return Array.from(sortedMap.values());
  }
);
