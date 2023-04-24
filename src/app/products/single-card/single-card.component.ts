import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input() props!: IProduct;
  justified: boolean = true;
  heading:string = '';

  constructor() {}
  ngOnInit(): void {}
}
