import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'cart', component: CartComponent },
    ]),
  ],
})
export class CartModule {}
