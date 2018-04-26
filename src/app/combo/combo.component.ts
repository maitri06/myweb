import { Component, OnInit } from '@angular/core';
import { CombodataService } from '../combodata.service';
import { combo } from './combomodel';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
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

  getid(item)
  {
   this._router.navigate(["/detailcombo",item.pk_combo_id]);
   
  }

}
