import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input() props!: IProduct;

  constructor(){}
ngOnInit():void 
{

}
}
