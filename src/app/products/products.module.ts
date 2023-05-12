import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { SingleProductComponent } from './single-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productReducers } from './store/products-reducer';
import { ProductEffect } from './store/effects';

@NgModule({
  declarations: [
    ProductsComponent,
    SingleProductComponent,
    ProductCardComponent,
    SingleCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('products', productReducers),
    EffectsModule.forFeature([ProductEffect]),
    TabsModule.forRoot(),
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/watch', component: SingleProductComponent },
    ]),
  ],
})
export class ProductsModule {}
