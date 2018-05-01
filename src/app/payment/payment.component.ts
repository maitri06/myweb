import { BilldataService } from './../billdata.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CartdataService } from '../cartdata.service';
import { procart } from '../cart/procartmodel';
import { user } from '../user/usermodel';
import { bill } from '../bill/billmodel';
import { EmaildataService } from '../emaildata.service';
import { Forget } from '../forget/forgetmodel';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  sub:Subscription;
  id:number;
  cart:procart[]=[];
  email:string;
  bill:number=0;
  i: number;
  sum:number=0;
  dat:Date;
  public msg:string;

  constructor(public _data:CartdataService,public _r:Router, public _email: EmaildataService
    ,public _activerouter:ActivatedRoute,public _dat:BilldataService) { }

  ngOnInit() {
    this.dat=new Date();
    console.log(this.dat);
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
   console.log(data[0].pk_cart_id);

  },
    function (e) { alert(e); },
    function () { }
    )

 }
 onClick()
{
  let item=new bill(null,'Credit Card',this.sum,this.dat.toString(),this.email,6);
    this._dat.addBill(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._r.navigate(['/bill']);
      }
    )

    var msg = this.email+ '  Your Order Amount is Rs   '+this.sum+'   Thank You for shopping !!!';

  this._email.sendMail(new Forget(msg, this.email,'Order details!!! ')).subscribe(
    (data: any) => {

      console.log('msg sent');
      alert('msg sent');
     // this._router.navigate(['/home']);
    }
  );
  console.log();
  this._r.navigate(['/bill']);
 }
  }


