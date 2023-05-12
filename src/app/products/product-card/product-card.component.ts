import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../types/products';
import * as CartActions from 'src/app/products/store/actions';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroup, selectGroupedCartItems } from '../store/selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() props!: IProduct;
  count$: Observable<ProductGroup[]>;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectGroupedCartItems);

  }
  ngOnInit(): void {}
  addToCart(item: IProduct) {
    this.store.dispatch(CartActions.addToCart(item));

    console.log(`Item added : ${item.title}`);
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
