import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(products)
      },

      error: (err) => (this.errorMessage = err),
    });
  }
}
