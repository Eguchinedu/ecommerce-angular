import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../types/products';
import * as CartActions from 'src/app/products/store/actions';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { ProductGroup, selectGroupedCartItems } from '../store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input() props!: IProduct;
  count$: Observable<ProductGroup[]>;
  justified: boolean = true;
  heading: string = '';

  constructor(private store: Store) {
    this.count$ = this.store.select(selectGroupedCartItems);
  }

  ngOnInit(): void {}
  decreaseItem(item: IProduct) {
    this.store.dispatch(CartActions.removeFromCart(item));
  }

  addToCart(item: IProduct) {
    this.store.dispatch(CartActions.addToCart(item));
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

    console.log('item : ', `added : ${item.title}`);
  }
}
