import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { CongtyService } from 'src/app/service/congty.service';
import { Router } from '@angular/router';
import { ThuocService } from 'src/app/service/thuoc.service';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';
import { Nhasanxuat } from 'src/app/model/nhasanxuat.model';
import { Thuoc } from 'src/app/model/thuoc.model';

@Component({
  selector: 'app-update-thuoc',
  templateUrl: './update-thuoc.component.html',
  styleUrls: ['./update-thuoc.component.css']
})
export class UpdateThuocComponent implements OnInit {

  constructor(private loaithuocService:LoaithuocService,private congtyService:CongtyService,private _fb:FormBuilder,private route:Router,private thuocService:ThuocService) {}
  updateForm:FormGroup;
  dates:String[]=[];
  date:Date;
  thuoc:Thuoc;
  idthuoc:number;
  loaithuocs:Loaithuoc[];
  congtys:Nhasanxuat[];
  ngOnInit() {
    this.thuoc=JSON.parse(localStorage.getItem('updateThuoc'));
    this.idthuoc=this.thuoc.idthuoc;
    this.date=new Date(this.formatString(this.thuoc.ngaynhap));
    this.updateForm=this._fb.group({
      tenthuoc:[this.thuoc.tenthuoc,Validators.required],
      idloaithuoc:[this.thuoc.loaithuoc.idloaithuoc,Validators.required],
      idnhasanxuat:[this.thuoc.nhasanxuat.idnhasanxuat,Validators.required],
      ngaynhap:[this.date,Validators.required],
      soluong:[this.thuoc.soluong,Validators.required],
      tacdung:[this.thuoc.tacdung,Validators.required],
      cachdung:[this.thuoc.cachdung,Validators.required]
    });
    this.congtyService.getAllCongty().subscribe(data=>{
        this.congtys=data;
    });
    this.loaithuocService.getAllloaithuoc().subscribe(data=>{
      this.loaithuocs=data;
    })
  }
  Update(){
    this.updateForm.controls.ngaynhap.setValue(this.formatDate(this.date));
    this.thuocService.updateThuoc(this.idthuoc,this.updateForm.value).subscribe(data=>{
      alert("Cập nhật thành công");
      this.route.navigate(['yte/thuoc']);
    });
  }
  Huy(){
    this.route.navigate(['yte/thuoc']);
  }
  formatString(date1:string){
    this.dates=date1.split('/');
    return this.dates[1]+'/'+this.dates[0]+'/'+this.dates[2];
  }
  formatDate(date:Date){
    let d=date.getDate()>=10?date.getDate():'0'+date.getDate();
    let m=(date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
    let y=date.getFullYear();
    return d+'/'+m+'/'+y;
  }

}
