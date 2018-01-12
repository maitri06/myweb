import { Component, OnInit } from '@angular/core';
import {user } from "../user/usermodel";
import { RegisterdataService } from "../registerdata.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _data:RegisterdataService,public _router:Router) { }

  ngOnInit() {
  }
  email:string="";
password:string="";
name:string="";
gender:string="";
image:string="";
mob:string="";
address:string="";
public user:user[]=[];

signUp()
  {
    let item=new user(this.email,this.password,this.name,this.gender,this.image,this.mob,this.address,'user');
    this._data.addUser(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/home']);
      }
    )
  }


}
