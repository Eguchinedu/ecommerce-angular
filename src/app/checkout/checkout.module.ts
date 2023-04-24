import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout.component';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: 'checkout', component: CheckoutComponent }]),
  ],
})
export class CheckoutModule {}
