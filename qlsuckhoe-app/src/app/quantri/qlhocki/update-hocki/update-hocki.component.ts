import { Component, OnInit } from '@angular/core';
import { HockiService } from 'src/app/service/hocki.service';
import { Router } from '@angular/router';
import { Hocki } from 'src/app/model/hocki.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-hocki',
  templateUrl: './update-hocki.component.html',
  styleUrls: ['./update-hocki.component.css']
})
export class UpdateHockiComponent implements OnInit {

  constructor(private _fb:FormBuilder,private hockiService:HockiService,private route:Router) { }
  hocki:Hocki;
  updateForm:FormGroup;
  idhocki:number;
  ngOnInit() {
    this.hocki=JSON.parse(localStorage.getItem('updateHocki'));
    this.idhocki=this.hocki.idhocki;
    this.updateForm=this._fb.group({
      tenhocki:[this.hocki.tenhocki,Validators.required]
    });
  }
  Update(){
    this.hockiService.putHocki(this.idhocki,this.updateForm.value).subscribe(data=>{
        alert("Cập nhật thành công");
        this.route.navigate(['quantri/hocki']);
    });
  }
  Huy(){
    this.route.navigate(['quantri/hocki']);
  }
}
