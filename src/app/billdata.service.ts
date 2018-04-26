import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bill } from './bill/billmodel';
import { user } from "./user/usermodel";
import {  UserdataService} from "./userdata.service";


@Injectable()
export class BilldataService {
  public url: string = 'http://localhost:3000/bill/';
  constructor(public _http: HttpClient) { }
  getAllBill() {
    return this._http.get(this.url);
  }
  getBillByEmail(id:string){
    return this._http.get(this.url + id);

  }
  deleteBill(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  addBill(bills:bill){
    let body=JSON.stringify(bills);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
