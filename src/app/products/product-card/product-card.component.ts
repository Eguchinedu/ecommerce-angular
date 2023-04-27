import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  @Input() props!: IProduct;

  constructor(private cartService: CartService){}
ngOnInit():void 
{

}
addToCart(item: IProduct){
  this.cartService.addToCart(item);

  console.log(`Item added : ${item.title},  Quantity: ${item.quantity}`);
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

Toast.fire({
  icon: 'success',
  title: 'Item Added successfully',
});
}
}
