import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cart } from './cart/cartmodel';

@Injectable()
export class CartdataService {
  public url: string = "http://localhost:3000/cart/";
  public url1: string = "http://localhost:3000/procart/";
  public url2:string="http://localhost:3000/procart1/";
  constructor(public _http: HttpClient) { }
  getAllCart() {
    return this._http.get<cart>(this.url);
  }
  getCartByEmail(id:string){
    return this._http.get(this.url1 + id);
 
  }
  getCartById(id:number){
    return this._http.get(this.url+id);
  }
  getCartByProduct(id:number){
    return this._http.get(this.url2+id);
  }
  getProductAndCart() {
    return this._http.get(this.url1);
  }
  deleteCart(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addCart(carts:cart){
    let body=JSON.stringify(carts);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
