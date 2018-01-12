import { Component, OnInit } from '@angular/core';
import { user } from '../user/usermodel';
import { LogindataService } from '../logindata.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pk_email_id:string;
  u_password:string;
  name1:string="";
  constructor(public data:LogindataService,public _router:Router) { }

  ngOnInit() {
  }
  onLogin(){
    let item=new user(this.pk_email_id,this.u_password,'','','','','','');
    this.data.login(item).subscribe(
      (data:user[])=>{
        console.log(data);
        
        if(data.length==1)
        {
         
          //localStorage.setItem('Email',this.email_id);
          //localStorage.setItem('Name',data[0].u_name);
          this._router.navigate(['/home']);
          //alert(" thayu");
        }
        else{
          alert("na thayu");
        }
      }
    );
  }

}


