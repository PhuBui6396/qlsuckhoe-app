import { Component, OnInit } from '@angular/core';
import { CongtyService } from 'src/app/service/congty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThuocService } from 'src/app/service/thuoc.service';
import { Nhasanxuat } from 'src/app/model/nhasanxuat.model';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { Thuoc } from 'src/app/model/thuoc.model';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';

@Component({
  selector: 'app-add-thuoc',
  templateUrl: './add-thuoc.component.html',
  styleUrls: ['./add-thuoc.component.css']
})
export class AddThuocComponent implements OnInit {
  constructor(private loaithuocService:LoaithuocService,private congtyService:CongtyService,private _fb:FormBuilder,private route:Router,private thuocService:ThuocService) {}
  addForm:FormGroup;
  dates:String[]=[];
  date:Date;
  loaithuocs:Loaithuoc[];
  congtys:Nhasanxuat[];
  ngOnInit() {
    this.addForm=this._fb.group({
      tenthuoc:['',Validators.required],
      idloaithuoc:['',Validators.required],
      idnhasanxuat:['',Validators.required],
      ngaynhap:['',Validators.required],
      soluong:['',Validators.required],
      tacdung:['',Validators.required],
      cachdung:['',Validators.required]
    });
    this.congtyService.getAllCongty().subscribe(data=>{
        this.congtys=data;
        this.addForm.controls.idnhasanxuat.setValue(this.congtys[0].idnhasanxuat);
    });
    this.loaithuocService.getAllloaithuoc().subscribe(data=>{
      this.loaithuocs=data;
      this.addForm.controls.idloaithuoc.setValue(this.loaithuocs[0].idloaithuoc);
    })
  }
  Add(){
    this.addForm.controls.ngaynhap.setValue(this.formatDate(this.date));
    this.thuocService.addThuoc(this.addForm.value).subscribe(data=>{
      alert("Thêm mới thành công");
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
