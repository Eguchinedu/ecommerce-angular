import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { SingleProductComponent } from './single-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

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
    TabsModule.forRoot(),
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'products/watch', component: SingleProductComponent },
    ]),
  ],
})
export class ProductsModule {}
