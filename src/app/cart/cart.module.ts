import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'cart', component: CartComponent },
    ]),
  ],
})
export class CartModule {}
