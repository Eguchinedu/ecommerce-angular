import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/products';
import { CartService } from 'src/app/services/cart.service';
import { UserDetails } from '../user-details';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


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
  products: IProduct[] = [];
  postError = false;
  postErrorMessage = '';
  src: string;
  
  constructor(private cartService: CartService, private router: Router) {
    
    this.src = '/assets/images/success.PNG';
  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => (this.products = res));
    console.log(this.userDetails);
  }
  decreaseItem(item: IProduct) {
    this.cartService.decrementQty(item);
  }
  removeItem(item: IProduct) {
    this.cartService.removeCartItem(item);
  }
  addToCart(item: IProduct) {
    this.cartService.addToCart(item);

    console.log(
      'item : ',
      `added ${item.title},  Quantity: ${item.quantity} to cart`
    );
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

