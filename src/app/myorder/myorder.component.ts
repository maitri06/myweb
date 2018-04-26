import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';
import {BilldataService  } from '../billdata.service';
import {bill  } from '../bill/billmodel';
import {user} from '../user/usermodel';
import { procart } from '../cart/procartmodel';
import {UserdataService  } from '../userdata.service';


@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(public _data: CartdataService,public _data1:UserdataService,public _data2:BilldataService,public _router: Router) { }
  public cart:procart[]=[];
  public usr:user[]=[];
  public bill1:bill[]=[];
  public name:string;
  public email:string;
  public qty:number;
  public sum:number=0;
  public i:number;
  public uname:string;
  public address:string;
public date:string;
public type:string;
public oid:string;
  ngOnInit() {
    this.email=localStorage.getItem('Email');

    this._data1.getUserById(this.email).subscribe(
    (data1:any)=>{this.usr=data1;
    console.log(data1);
      this.uname=data1[0].u_name;
      this.address=data1[0].u_address;
    },

  function (e) { alert(e); },
  function () { }
    )
    this._data.getCartByEmail(this.email).subscribe(
      (data:any)=>{this.cart=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
     for(this.i=0;this.i<data.length;this.i++){
     this.cart[this.i].cart_amount1=data[this.i].cart_qty*data[this.i].cart_amount;
     this.sum+= this.cart[this.i].cart_amount1;

     }
     console.log(data[0].pk_cart_id);

    },
      function (e) { alert(e); },
      function () { }
      )

    this._data2.getBillByEmail(this.email).subscribe(

      (data2:any)=>{this.bill1=data2;
      console.log(data2);
      this.oid=data2[0].pk_bill_id;
      this.date=data2[0].bill_date;
      this.type=data2[0].bill_type;
      },
      function (e) { alert(e); },
      function () { }
    )
  }

}
