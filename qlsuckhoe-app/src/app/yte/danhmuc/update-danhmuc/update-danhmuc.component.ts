import { Component, OnInit } from '@angular/core';
import { DanhmucService } from 'src/app/service/danhmuc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DanhMuc } from 'src/app/model/danhmuc.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-danhmuc',
  templateUrl: './update-danhmuc.component.html',
  styleUrls: ['./update-danhmuc.component.css']
})
export class UpdateDanhmucComponent implements OnInit {


  constructor(private _fb:FormBuilder,private danhmucService:DanhmucService,private route:Router) { }
  danhmuc:DanhMuc;
  updateForm:FormGroup;
  iddanhmuc:number;
  ngOnInit() {
    this.danhmuc=JSON.parse(localStorage.getItem('updateDanhmuc'));
    this.iddanhmuc=this.danhmuc.iddanhmuc;
    this.updateForm=this._fb.group({
      tendanhmuc:[this.danhmuc.tendanhmuc,Validators.required]
    });
  }
  Update(){
    this.danhmucService.putDanhmuc(this.iddanhmuc,this.updateForm.value).subscribe(data=>{
        alert("Cập nhật thành công");
        this.route.navigate(['yte/danhmuc']);
        location.reload();
    });
  }
  Huy(){
    this.route.navigate(['yte/danhmuc']);
  }
}
