import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { CartService } from 'src/app/services/cart.service';
import { StateService } from 'src/app/services/state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input() props!: IProduct;
  justified: boolean = true;
  heading: string = '';

  constructor(
    private cartService: CartService,
    private stateService: StateService
  ) {}
  ngOnInit(): void {}
  decreaseItem(item: IProduct) {
    this.cartService.decrementQty(item);
  }
  
  addToCart(item: IProduct) {
    this.cartService.addToCart(item);
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

    console.log(
      'item : ',
      `added : ${item.title},  Quantity: ${item.quantity}`
    );
  }
}

