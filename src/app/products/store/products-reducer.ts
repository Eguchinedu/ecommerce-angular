import { createReducer, on } from "@ngrx/store";
import { ProductsState } from "../types/products-state";
import * as ProductFetch from 'src/app/products/store/actions'

export const initialState: ProductsState = {
    isLoading: false,
    products: [],
    error: null,
};

export const productReducers = createReducer(
  initialState,
  on(ProductFetch.getProducts, (state) => ({ ...state, isLoading: true })),
  on(ProductFetch.getProductSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    products: action.products,
  })),
  on(ProductFetch.getProductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);