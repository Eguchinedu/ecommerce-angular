import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from '../products/store/cart-reducer';



@NgModule({
  declarations: [CartItemComponent, CartComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('cartitems',cartReducers),
    RouterModule.forChild([{ path: 'cart', component: CartComponent }]),
  ],
})
export class CartModule {}
