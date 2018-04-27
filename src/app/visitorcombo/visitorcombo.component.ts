import { Component, OnInit } from '@angular/core';
import { CombodataService } from '../combodata.service';
import { combo } from '../combo/combomodel';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-visitorcombo',
  templateUrl: './visitorcombo.component.html',
  styleUrls: ['./visitorcombo.component.css']
})
export class VisitorcomboComponent implements OnInit {
  public combo: combo[] = [];
  public email:string;
  constructor(public _data: CombodataService, public _router: Router) { }

  ngOnInit() {
    this.email=localStorage.getItem('Email');
    this._data.getAllCombo().subscribe(
      (data: any) => { this.combo = data },
      function (e) { alert(e); },
      function () { }
    )
  }
  getComboid(item)
  {
   this._router.navigate(["/visitorcombodetail",item.pk_combo_id]);
   
  }
  getalert(){
    alert("Please Log in to see the Detail of Combo!!");
  }


}
