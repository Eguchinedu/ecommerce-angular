import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/products';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  products: IProduct[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products.slice(0,8);
        console.log(products)
      },

      error: (err) => (this.errorMessage = err),
    });
  }
}
