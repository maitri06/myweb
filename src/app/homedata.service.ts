import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './home/productmodel';


@Injectable()
export class HomedataService {
  public url: string = "http://localhost:3000/product/";
  public url1: string = "http://localhost:3000/prod_cat/";
  
  constructor(public _http: HttpClient) { }
  getAllProduct() {
    return this._http.get<product>(this.url);
  }
  getProductAndCat() {
    return this._http.get(this.url1);
  }
}
