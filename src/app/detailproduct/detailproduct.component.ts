import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute  } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { HomedataService } from "../homedata.service";
import {product} from "../home/productmodel";

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


  constructor(public _data:HomedataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this.sub=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["p_id"];
        console.log(this.id);
       

        this._data.getProductId(this.id).subscribe(
          (data:any)=>{
           // localStorage.setItem('product_id',this.id);
              this.name=data[0].pro_name;
              this.price=data[0].pro_price;
              this.desci=data[0].pro_desci;
          }
        );
       
      }
    )
  }
  


}
