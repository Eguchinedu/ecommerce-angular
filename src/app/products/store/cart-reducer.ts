import { createReducer, on } from '@ngrx/store';
import * as CartActions from 'src/app/products/store/actions';
import { IProduct } from '../types/products';

export const initialState: IProduct[] = []

export const cartReducers = createReducer(
  initialState,
 on(CartActions.clearCart, _ => []),
 on(CartActions.addToCart, (state, product) => {
    const cartItemList: IProduct[] = JSON.parse(JSON.stringify(state));
    cartItemList.push(product);
    return cartItemList;
 }),
 on(CartActions.removeFromCart, (state, product) => {
    const cartItemList: IProduct[] = JSON.parse(JSON.stringify(state));
    const found = cartItemList.find(e => e.id === product.id);
    if(found){
        cartItemList.splice(cartItemList.indexOf(found), 1)
    }

    return cartItemList;
 })
);
