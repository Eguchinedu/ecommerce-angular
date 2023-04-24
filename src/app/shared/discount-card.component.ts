import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/products';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.css'],
})
export class DiscountCardComponent implements OnInit {
  @Input() props!: IProduct;

  constructor() {}
  ngOnInit(): void {}
}
