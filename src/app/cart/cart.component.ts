import { Component, OnInit } from '@angular/core';
import { cart } from './cartmodel';
import { Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';
import { procart } from './procartmodel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 // public cart: cart[] = [];
  public cart:procart[]=[];
  public name:string;
  public email:string;
  public qty:number;
  i:number;

  constructor(public _data: CartdataService, public _router: Router) { }
  ngOnInit() {
    this.email=localStorage.getItem('Email');

     this._data.getCartByEmail(this.email).subscribe(
     (data: any) => {this.cart=data;
      for(this.i=0;this.i<data.length;this.i++){
        this.cart[this.i].cart_amount1=data[this.i].cart_qty*data[this.i].cart_amount;
      }
     // this.name=localStorage.getItem('product_id');
    console.log(data);
   },
     function (e) { alert(e); },
     function () { }
     )

   /* this._data.getProductAndCart().subscribe(
      (data: any) => { this.cart = data ;
        this.name=localStorage.getItem('product_id');
      },
      function (e) { alert(e); },
      function () { }
    ) */
  }
  getId()
  {
   this._router.navigate(['/payment']);
   console.log(this.qty);

  }
  onDeleteCart(item) {
    this._data.deleteCart(item.pk_cart_id).subscribe(
      (data: any) => {
        console.log(data);
        this.cart.splice(this.cart.indexOf(item), 1);
      }
    )
  }


}
