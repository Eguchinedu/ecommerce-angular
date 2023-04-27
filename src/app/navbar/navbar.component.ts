import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',]
})
export class NavbarComponent implements OnInit {

public sum:number = 0;
constructor(private cartService : CartService ){}

ngOnInit():void{
  this.updateCartStatus()
}
updateCartStatus(){
  this.cartService.totalQuantity.subscribe((res)=> this.sum = res)                                            

}
}
