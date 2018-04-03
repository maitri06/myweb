import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { product_cat } from "../home/product_cat_model";
import { product } from "../home/productmodel";

import {HomedataService  } from "../homedata.service";

@Component({
  selector: 'app-prodone',
  templateUrl: './prodone.component.html',
  styleUrls: ['./prodone.component.css']
})
export class ProdoneComponent implements OnInit {
str:string;
public product: product[] = [];
  constructor(private _route:ActivatedRoute,public _data:HomedataService) { }

  ngOnInit() {

      this.str=this._route.snapshot.params['p_name'];
      console.log(this.str);
      this._data.getProductByCat(this.str).subscribe(
        (data:any)=>{this.product=data;
        // this.name=localStorage.getItem('product_id');
       console.log(data);
      },
        function (e) { alert(e); },
        function () { }
        )
  }

}
