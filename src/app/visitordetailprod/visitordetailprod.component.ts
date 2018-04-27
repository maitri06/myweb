import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { HomedataService } from "../homedata.service";
import { product } from "../home/productmodel";
import { cart } from "../cart/cartmodel";
import { CartdataService } from "../cartdata.service";

@Component({
  selector: 'app-visitordetailprod',
  templateUrl: './visitordetailprod.component.html',
  styleUrls: ['./visitordetailprod.component.css']
})
export class VisitordetailprodComponent implements OnInit {
  sub: Subscription;
  id: number;
  name: string;
  price: number;
  desci: string;
  email: string;
  qty: number;
  img1:string;
img2:string;
img3:string;

  constructor(public _data: HomedataService, public dat: CartdataService, public _r: Router, public _activerouter: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._activerouter.params.subscribe(
      (para: any) => {
        this.id = para["p_id"];
        console.log(this.id);

 
        this._data.getProductId(this.id).subscribe(
          (data: any) => {
            // localStorage.setItem('product_id',this.id);
            this.name = data[0].pro_name;
            console.log(this.email);
            this.price = data[0].pro_price;
            console.log(this.price);
            this.desci = data[0].pro_desci;
            this.img1=data[0].pro_img1;
            this.img2=data[0].pro_img2;
            this.img3=data[0].pro_img3;


          }
        );

      }
    )
  }
 
}
