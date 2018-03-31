import { Component, OnInit } from '@angular/core';
import { user } from '../user/usermodel';
import { LogindataService } from '../logindata.service';
import { Router } from "@angular/router";
//import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_id:string;
  password:string;
  name1:string="";
  //email = new FormControl('', [Validators.required, Validators.email]);

  constructor(public data:LogindataService,public _router:Router) { }

  ngOnInit() {
  }
  /*getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  onLogin(){
    let item=new user(this.pk_email_id,this.u_password,'','','','','','');
    this.data.login(item).subscribe(
      (data:user[])=>{
        console.log(data);
        
        if(data.length==1)
        {
         
          localStorage.setItem('Email',this.pk_email_id);
          localStorage.setItem('Name',data[0].u_name);
          this._router.navigate(['/home']);
          //alert(" thayu");
        }
        else{
          alert("na thayu");
        }
      }
    );
  }*/
  taskSubmit(){
    let item=new user(this.email_id,this.password,'','','','','','');
    this.data.login(item).subscribe(
      (data:user[])=>{
        console.log(data);
        
        if(data.length==1)
        {
         
         /* name1=this.data.name;
          localStorage.setItem('Name',this.data.name1);*/
          localStorage.setItem('Email',this.email_id);
          localStorage.setItem('Name',data[0].u_name);
          this._router.navigate(['/home']);
        }
        else{
          alert("na thayu");
        }
      }
    );
  }
}


