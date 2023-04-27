import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/products';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() props!: IProduct;

  constructor(
    private cartService: CartService,
    private stateService: StateService
  ) {}
  ngOnInit(): void {
    // this.cartItemAmount = this.stateService.state$.getValue() || 0;
  }
  decreaseItem(item: IProduct){
    this.cartService.decrementQty(item)
  }
  removeItem(item: IProduct) {
    this.cartService.removeCartItem(item);
  }
  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
    // this.cartService.cartItemList.map(
    //   (res) => (this.cartItemAmount = res.quantity)
    // );
    // console.log(this.cartItemAmount);
    // this.stateService.state$.next(this.cartItemAmount);
  }
}
