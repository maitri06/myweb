import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './home/productmodel';

@Injectable()
export class CombodataService {
  public url: string = "http://localhost:3000/combo/";
  constructor(public _http: HttpClient) { }
  getAllCombo() {
    return this._http.get<product>(this.url);
  }
  getComboId(id)
  {
    return this._http.get<product>(this.url+id);
  }
  
} 
