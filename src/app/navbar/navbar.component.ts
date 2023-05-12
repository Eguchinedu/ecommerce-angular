import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCountProducts } from '../products/store/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',]
})
export class NavbarComponent implements OnInit {

sum$:Observable<number>;
constructor( private store: Store){
  this.sum$ = this.store.select(selectCountProducts)
 this.sum$.subscribe(console.log.bind(console))
}

ngOnInit():void{
}

}
