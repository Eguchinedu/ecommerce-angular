import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountCardComponent } from './discount-card.component';
import { RouterModule } from '@angular/router';
import { ImgPropComponent } from './img-prop/img-prop.component';




@NgModule({
  declarations: [
    DiscountCardComponent,
    ImgPropComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DiscountCardComponent,
    ImgPropComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
