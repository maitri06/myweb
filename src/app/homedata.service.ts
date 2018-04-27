import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './home/productmodel';



@Injectable()
export class HomedataService {
  public url: string = "http://localhost:3000/product/";
  public url1: string = "http://localhost:3000/prod_cat/";
  public url2: string = "http://localhost:3000/proprice1/";
  public url3: string = "http://localhost:3000/proprice2/";
  public url4: string = "http://localhost:3000/proprice3/";
  public url5: string = "http://localhost:3000/proprice4/";
  public url6: string = "http://localhost:3000/proprice5/";
  public url7: string = "http://localhost:3000/probrand/";
  

 

  constructor(public _http: HttpClient) { }
  getAllProduct() {
    return this._http.get<product>(this.url);
  }
  getProductAndCat() {
    return this._http.get(this.url1);
  }
  getProductByCat(id:string){
    return this._http.get(this.url1 + id);
  }
  getProductByBrand(id:string){
    return this._http.get(this.url7 + id);
  }
  getProductId(id)
  {
    return this._http.get<product>(this.url+id);
  }
  getPrice1()
  {
    return this._http.get(this.url2);
  }
  getPrice2()
  {
    return this._http.get(this.url3);
  }
  getPrice3()
  {
    return this._http.get(this.url4);
  }
  getPrice4()
  {
    return this._http.get(this.url5);
  }
  getPrice5()
  {
    return this._http.get(this.url6);
  }
 
}
