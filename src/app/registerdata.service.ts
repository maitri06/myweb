import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from './user/usermodel';


@Injectable()
export class RegisterdataService {
  public url:string="http://localhost:3000/user/";
  constructor(public _http:HttpClient) { }
  addUser(users:user){
    let body=JSON.stringify(users);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
