import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute  } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { TrenddataService } from "../trenddata.service";
import {tre} from "../trend/trendmodel";


@Component({
  selector: 'app-detailtproduct',
  templateUrl: './detailtproduct.component.html',
  styleUrls: ['./detailtproduct.component.css']
})
export class DetailtproductComponent implements OnInit {
  sub:Subscription;
  id:number;
  tname:string;
  tprice:number;
  tdesci:string;
  email:string;
  qty:number;
  timg1:string;
  timg2:string;
  timg3:string;
  tre: tre[]= [];
 
  
  
  constructor(public _data:TrenddataService, _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._data.getAlltProduct().subscribe(
      (data: any) => { this.tre = data; },
      function (e) { alert(e); },
      function () { }
    )

    this.sub=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["t_id"];
        console.log(this.id);


        this._data.gettProductId(this.id).subscribe(
          (data:any)=>{
           // localStorage.setItem('product_id',this.id);
              this.tname=data[0].pro_tname;
              console.log(this.email);
              this.tprice=data[0].pro_tprice;
              console.log(this.tprice);
              this.tdesci=data[0].pro_tdesci;
              this.timg1=data[0].pro_timg1;
              this.timg2=data[0].pro_timg2;
              this.timg3=data[0].pro_timg3;


          }
        );

      }
    )
  }
 
}
