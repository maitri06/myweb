import { Component, OnInit } from '@angular/core';
import { cart } from './cartmodel';
import { Router } from '@angular/router';
import { CartdataService } from '../cartdata.service';
import { procart } from './procartmodel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: cart[] = [];
  constructor(public _data: CartdataService, public _router: Router) { }

  ngOnInit() {
    this._data.getProductAndCart().subscribe(
      (data: any) => { this.cart = data },
      function (e) { alert(e); },
      function () { }
    )
  }


}
