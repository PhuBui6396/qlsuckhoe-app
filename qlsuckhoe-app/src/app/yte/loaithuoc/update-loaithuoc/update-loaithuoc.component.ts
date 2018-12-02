import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';

@Component({
  selector: 'app-update-loaithuoc',
  templateUrl: './update-loaithuoc.component.html',
  styleUrls: ['./update-loaithuoc.component.css']
})
export class UpdateLoaithuocComponent implements OnInit {

  constructor(private _fb:FormBuilder,private loaithuocService:LoaithuocService,private route:Router) { }
  loaithuoc:Loaithuoc;
  updateForm:FormGroup;
  idloaithuoc:number;
  ngOnInit() {
    this.loaithuoc=JSON.parse(localStorage.getItem('updateLoaithuoc'));
    this.idloaithuoc=this.loaithuoc.idloaithuoc;
    this.updateForm=this._fb.group({
      tenloai:[this.loaithuoc.tenloai,Validators.required]
    });
  }
  Update(){
    this.loaithuocService.putLoaithuoc(this.idloaithuoc,this.updateForm.value).subscribe(data=>{
        alert("Cập nhật thành công");
        this.route.navigate(['yte/loaithuoc']);
    });
  }
  Huy(){
    this.route.navigate(['yte/loaithuoc']);
  }
}
