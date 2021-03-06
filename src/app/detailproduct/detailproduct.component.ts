import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute  } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { HomedataService } from "../homedata.service";
import {product} from "../home/productmodel";
import { cart } from "../cart/cartmodel";
import { CartdataService } from "../cartdata.service";
 
@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
sub:Subscription;
id:number;
name:string;
price:number;
desci:string;
email:string;
qty:number;
img1:string;
img2:string;
img3:string;
product: product[]= [];
cart_cnt:string="1";

  constructor(public _data:HomedataService,public dat:CartdataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._data.getAllProduct().subscribe(
      (data: any) => { this.product = data; },
      function (e) { alert(e); },
      function () { }
    )

    this.sub=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["p_id"];
        console.log(this.id);


        this._data.getProductId(this.id).subscribe(
          (data:any)=>{
           // localStorage.setItem('product_id',this.id);
              this.name=data[0].pro_name;
              console.log(this.email);
              this.price=data[0].pro_price;
              console.log(this.price);
              this.desci=data[0].pro_desci;
              this.img1=data[0].pro_img1;
              this.img2=data[0].pro_img2;
              this.img3=data[0].pro_img3;


          }
        );

      }
    )

  }
  addtocart()
  {
    this.email=localStorage.getItem('Email');
    console.log(this.qty);
    let item=new cart(null,this.qty,this.price,this.email,this.id);
    this.dat.addCart(item).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem('cart_cnt',this.cart_cnt);
        this._r.navigate(['/cart']);
      }
    )
  }
 
  price1()
  {

  }

}
