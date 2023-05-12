import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/types/products';
import * as CartActions from 'src/app/products/store/actions';

import { StateService } from '../services/state.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.css'],
})
export class DiscountCardComponent implements OnInit {
  @Input() props!: IProduct;

  constructor(private store: Store) {}
  ngOnInit(): void {}
  addToCart(item: IProduct) {
    this.store.dispatch(CartActions.addToCart(item));

    console.log('item : ', `added : ${item.title}`);
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
