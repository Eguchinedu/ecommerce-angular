import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { HeroComponent } from './home/hero/hero.component';
import { TopSellingComponent } from './home/top-selling/top-selling.component';
import { DiscountComponent } from './home/discount/discount.component';
import { Hero2Component } from './home/hero2/hero2.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    TopSellingComponent,
    DiscountComponent,
    Hero2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    TabsModule.forRoot(),
    ProductsModule,
    CartModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
