import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cart } from './cart/cartmodel';

@Injectable()
export class CartdataService {
  public url: string = "http://localhost:3000/cart/";
  public url1: string = "http://localhost:3000/procart";
  constructor(public _http: HttpClient) { }
  getAllCart() {
    return this._http.get<cart>(this.url);
  }
  getProductAndCart() {
    return this._http.get(this.url1);
  }
}
