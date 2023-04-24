import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { IProduct } from './products';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit{
  products: IProduct[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },

      error: (err) => (this.errorMessage = err),
    });
  }
}
