import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { product_cat } from "../home/product_cat_model";
import { product } from "../home/productmodel";
 
import {HomedataService  } from "../homedata.service";


@Component({
  selector: 'app-visitorprobrand',
  templateUrl: './visitorprobrand.component.html',
  styleUrls: ['./visitorprobrand.component.css']
})
export class VisitorprobrandComponent implements OnInit {
  str:string;
  public product: product[] = [];
  
  constructor(public _route:ActivatedRoute,public _data:HomedataService,public _router:Router) { }

  ngOnInit() {
    this.str=this._route.snapshot.params['p_brand'];
    console.log(this.str);
    this._data.getProductByBrand(this.str).subscribe(
      (data:any)=>{this.product=data;
      // this.name=localStorage.getItem('product_id');
     console.log(data);
    },
      function (e) { alert(e); },
      function () { }
      )
  }
  getId(item)
  {
   this._router.navigate(["/visitordetailprod",item.pk_pro_id]);

  }


}
