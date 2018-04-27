import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute  } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { CombodataService } from "../combodata.service";
import {combo} from "../combo/combomodel";
import { cart } from "../cart/cartmodel";
import { CartdataService } from "../cartdata.service";

@Component({
  selector: 'app-visitorcombodetail',
  templateUrl: './visitorcombodetail.component.html',
  styleUrls: ['./visitorcombodetail.component.css']
})
export class VisitorcombodetailComponent implements OnInit {
  sub:Subscription;
  id:number;
  name:string;
  price:number;
  img1:string;
  img2:string;
  img3:string;
  combo: combo[]= [];
  constructor(public _data:CombodataService,public dat:CartdataService,public _r:Router,public _activerouter:ActivatedRoute) { }

  ngOnInit() {
    this._data.getAllCombo().subscribe(
      (data: any) => { this.combo = data; },
      function (e) { alert(e); },
      function () { }
    )

    this.sub=this._activerouter.params.subscribe(
      (para:any)=>{
        this.id=para["p_id"];
        console.log(this.id);


        this._data.getComboId(this.id).subscribe(
          (data:any)=>{
           // localStorage.setItem('product_id',this.id);
              this.name=data[0].combo_name;
             
              this.price=data[0].combo_price;
              console.log(this.price);
             
              this.img1=data[0].combo_img1;
              this.img2=data[0].combo_img2;
              this.img3=data[0].combo_img3;


          }
        );

      }
    )

  }
  }


