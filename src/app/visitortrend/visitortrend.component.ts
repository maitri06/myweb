import { Component, OnInit } from '@angular/core';
import { TrenddataService } from '../trenddata.service';
import { tre } from '../trend/trendmodel';
import { Router } from '@angular/router';
import { product_cat } from "../home/product_cat_model";

@Component({
  selector: 'app-visitortrend',
  templateUrl: './visitortrend.component.html',
  styleUrls: ['./visitortrend.component.css']
})
export class VisitortrendComponent implements OnInit {
  public tre: tre[] = [];
  public email:string;
  constructor(public _data: TrenddataService, public _router: Router) { }

  ngOnInit() {
    this._data.getAlltProduct().subscribe(
      (data: any) => { this.tre = data; },
      function (e) { alert(e); },
      function () { }
    )
  }

}
