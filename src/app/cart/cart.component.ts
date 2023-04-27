import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../products/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => (this.products = res));
  }
  
}
