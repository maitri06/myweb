import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { product_cat } from "../home/product_cat_model";
import { product } from "../home/productmodel";
import {HomedataService  } from "../homedata.service";

@Component({
  selector: 'app-visitorpriceone',
  templateUrl: './visitorpriceone.component.html',
  styleUrls: ['./visitorpriceone.component.css']
})
export class VisitorpriceoneComponent implements OnInit {
  str:string;
  public product: product[] = [];
   
  constructor(public _route:ActivatedRoute,public _data:HomedataService,public _router:Router) { }

  ngOnInit() {
    
    this.str=this._route.snapshot.params['p_price'];
    console.log(this.str);
    if(this.str=="priceon")
    {
    this._data.getPrice1().subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
    }
    if(this.str=="pricetwo")
    {
    this._data.getPrice2().subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
    }
    if(this.str=="pricethree")
    {
    this._data.getPrice3().subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
    }
    if(this.str=="pricefour")
    {
    this._data.getPrice4().subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
    }
    if(this.str=="pricefive")
    {
    this._data.getPrice5().subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
    }

  }
  getId(item){
    this._router.navigate(["/visitordetailprod",item.pk_pro_id]);
   
   }
}
