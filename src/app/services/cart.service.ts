import { Injectable } from '@angular/core';
import { IProduct } from '../products/products';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList:IProduct[]= [];
public productList = new BehaviorSubject<IProduct[]>([]);
totalQuantity: Subject<number> = new Subject<number>()


  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  // setProduct(product: IProduct[]){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product)
  // }

  addToCart(product: any){
    // this.cartItemList.push(product);
//        const productExistInCart = this.cartItemList
// .find(({id}) => id === product.id);
//    if (!productExistInCart) {
//      this.cartItemList.push({...product, num:1}); 
//      return;
//    }
//    productExistInCart.num += 1;
let alreadyExistsInCart : boolean = false;
let existingCartItem: IProduct = undefined!   ;

if(this.cartItemList.length > 0){
  //find the item in the cart

  for (let tempCartItem of this.cartItemList){
    if(tempCartItem.id === product.id) {
      existingCartItem = tempCartItem;
      break;
    }
  }
// existingCartItem = this.cartItemList.find(tempCardItem => tempCardItem.id === product.id);
  //check to see if we have found it
  alreadyExistsInCart = (existingCartItem != undefined);
}
if (alreadyExistsInCart) {
  existingCartItem.quantity++ ;
} else {
  this.cartItemList.push(product)
}

    this.productList.next(this.cartItemList);
  console.log('CartList:',this.cartItemList)
  console.log(existingCartItem)

  this.totalQty()
  }


  totalQty(){
    let totalQuantityValue:number = 0;

    for(let currentCartItem of this.cartItemList){
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalQuantity.next(totalQuantityValue)
    console.log(totalQuantityValue)
  }
  decrementQty(product: IProduct){
product.quantity--;
if(product.quantity === 0) {
  this.removeCartItem(product)
}
  }

  removeCartItem(product: any ){
    this.cartItemList.map((a:any, index: any)=> {
      if(product.id=== a.id){
this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList);

  }
}
