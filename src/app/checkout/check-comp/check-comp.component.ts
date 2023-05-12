import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductGroup, selectGroupedCartItems } from 'src/app/products/store/selectors';
import * as CartActions from 'src/app/products/store/actions';


@Component({
  selector: 'app-check-comp',
  templateUrl: './check-comp.component.html',
  styleUrls: ['./check-comp.component.css'],
})
export class CheckCompComponent implements OnInit {
  originalUserDetails: UserDetails = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNo: null,
    address: null,
    city: null,
    state: null,
    zipCode: null,
  };
  userDetails: UserDetails = { ...this.originalUserDetails };
  products$: Observable<ProductGroup[]>;
  postError = false;
  postErrorMessage = '';
  src: string;

  constructor(private router: Router, private store: Store) {
    this.src = '/assets/images/success.PNG';
    this.products$ = this.store.select(selectGroupedCartItems);
  }

  ngOnInit(): void {
    console.log(this.userDetails);
  }
  decreaseItem(item: ProductGroup) {
    this.store.dispatch(CartActions.removeFromCart(item.product));

  }
  removeItem(item: ProductGroup) {
    this.store.dispatch(CartActions.removeFromCart(item.product));

  }
  addToCart(item: ProductGroup) {
    this.store.dispatch(CartActions.addToCart(item.product));

    console.log('item : ', `added ${item.product.title} to cart`);
  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.value);
    if (form.valid) {
      // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      //   result => console.log('success: ', result),
      //   error => this.onHttpError(error),
      //   );
      Swal.fire({
        title: 'Your order is complete',
        html: 'Order id: #133211',
        imageUrl: this.src,
        imageWidth: 150,
        imageHeight: 150,
        confirmButtonText: `<a class="complete-check" href=>Continue Shopping</a>`,
      });
      this.postError = false;
      this.postErrorMessage = '';
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }
}
