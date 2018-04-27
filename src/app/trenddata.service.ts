import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tre } from './trend/trendmodel';

@Injectable()
export class TrenddataService {
  public url8: string = "http://localhost:3000/trend/";
  constructor(public _http: HttpClient) { }
  getAlltProduct() {
    return this._http.get<tre>(this.url8);
  }
  gettProductId(id)
  {
    return this._http.get<tre>(this.url8+id);
  }
}
