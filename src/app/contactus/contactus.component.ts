import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Forget } from '../forget/forgetmodel';
import { EmaildataService } from '../emaildata.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
public email_id: string;
public subject: string;
public message: string;
public msg:string;

  constructor( public _router: Router, public _email: EmaildataService) { }

  ngOnInit() {


}
onSend()
{
  var msg = this.email_id + '   says  that  '+this.message;
  console.log(this.message);
  console.log(this.email_id);
  console.log(this.subject);

  this._email.sendMail(new Forget(msg, 'wardrobe0621@gmail.com','User has contacted You !!! ')).subscribe(
    (data: any) => {

      console.log('msg sent');
      alert('msg sent');
     // this._router.navigate(['/home']);
    }
  );
}

}
