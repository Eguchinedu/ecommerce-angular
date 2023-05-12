import { IProduct } from "./products";

export interface ProductsState {
    isLoading: boolean;
    products: IProduct[];
    error: string | null;
}