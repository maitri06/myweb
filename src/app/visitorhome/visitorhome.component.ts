import { Component, OnInit } from '@angular/core';
import { HomedataService } from '../homedata.service';
import { product } from '../home/productmodel';
import { Router } from '@angular/router';
import { product_cat } from "../home/product_cat_model";

 
@Component({
  selector: 'app-visitorhome',
  templateUrl: './visitorhome.component.html',
  styleUrls: ['./visitorhome.component.css']
})
export class VisitorhomeComponent implements OnInit {
  public product: product[] = [];
  public email:string;
  constructor(public _data: HomedataService, public _router: Router) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
    this._data.getProductAndCat().subscribe(
      (data: any) => { this.product = data },
      function (e) { alert(e); },
      function () { }
    )
  }
  getId(item) 
  {
   this._router.navigate(["/visitordetailprod",item.pk_pro_id]);
   //this._router.navigate(["/detailproduct",item.pk_pro_id]);
  }

 
}
