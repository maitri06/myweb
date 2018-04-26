import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CartdataService } from '../cartdata.service';
import { procart } from '../cart/procartmodel';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  sub:Subscription;
  id:number;
  cart:procart[]=[];
  email:string;
  bill:number=0;
  i:number;
  sum:number=0;
  constructor(public _data:CartdataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');

     this._data.getCartByEmail(this.email).subscribe(
     (data:any)=>{this.cart=data;
     // this.name=localStorage.getItem('product_id');
    console.log(data);
    for(this.i=0;this.i<data.length;this.i++){
    this.cart[this.i].cart_amount1=data[this.i].cart_qty*data[this.i].cart_amount;
    this.sum+= this.cart[this.i].cart_amount1;
    console.log(this.bill);
    }
    console.log(this.i);

   },
     function (e) { alert(e); },
     function () { }
     )

  }

}
