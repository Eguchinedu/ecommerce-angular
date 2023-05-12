import { createAction, props } from '@ngrx/store';
import { IProduct } from '../types/products';


export const getProducts = createAction('[products] Get Products');
export const getProductSuccess = createAction(
  '[Products] Get Products Success',
  props<{ products: IProduct[] }>()
);
export const addToCart = createAction(
  '[Products] Add to Cart',
  props<IProduct>()
);
export const removeFromCart = createAction(
  '[Products] Remove From Cart',
  props<IProduct>()
);
export const clearCart = createAction(
    '[Products] Clear Cart',
)
export const getProductsFailure = createAction(
  '[Products] Get Products Failure',
  props<{ error: string }>()
);
