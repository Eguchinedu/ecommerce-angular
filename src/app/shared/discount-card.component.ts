import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/products';
import { CartService } from '../services/cart.service';
import { StateService } from '../services/state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.css'],
})
export class DiscountCardComponent implements OnInit {
  @Input() props!: IProduct;

  constructor(
    private cartService: CartService,
    private stateService: StateService
  ) {}
  ngOnInit(): void {
    
  }
  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
   
    console.log('item : ',`added : ${item.title},  Quantity: ${item.quantity}`);
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
