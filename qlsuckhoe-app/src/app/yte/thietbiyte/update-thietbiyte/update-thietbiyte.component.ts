import { Component, OnInit } from '@angular/core';
import { CongtyService } from 'src/app/service/congty.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nhasanxuat } from 'src/app/model/nhasanxuat.model';
import { Router } from '@angular/router';
import { ThietbiService } from 'src/app/service/thietbi.service';
import { Thietbi } from 'src/app/model/thietbi.model';

@Component({
  selector: 'app-update-thietbiyte',
  templateUrl: './update-thietbiyte.component.html',
  styleUrls: ['./update-thietbiyte.component.css']
})
export class UpdateThietbiyteComponent implements OnInit {

  constructor(private congtyService:CongtyService,private _fb:FormBuilder,private route:Router,private thietbiService:ThietbiService) {}
  updateForm:FormGroup;
  dates:String[]=[];
  date:Date;
  congtys:Nhasanxuat[];
  thietbi:Thietbi;
  ngOnInit() {
    this.thietbi=JSON.parse(localStorage.getItem('updateThietbi'));
    this.date=new Date(this.formatString(this.thietbi.ngaynhap));
    this.updateForm=this._fb.group({
      tenthietbi:[this.thietbi.tenthietbi,Validators.required],
      idnhasanxuat:[this.thietbi.nhasanxuat.idnhasanxuat,Validators.required],
      ngaynhap:[this.date,Validators.required],
      soluong:[this.thietbi.soluong,Validators.required],
      cachdung:[this.thietbi.cachdung,Validators.required]
    });
    this.congtyService.getAllCongty().subscribe(data=>{
        this.congtys=data;
        this.updateForm.controls.idnhasanxuat.setValue(this.congtys[0].idnhasanxuat);
    });
  }
  Update(){
    this.updateForm.controls.ngaynhap.setValue(this.formatDate(this.date));
    this.thietbiService.updateThietbi(this.thietbi.idthietbiyte,this.updateForm.value).subscribe(data=>{
      alert("Cập nhật thành công");
      this.route.navigate(['yte/thietbi']);
    });
  }
  Huy(){
    this.route.navigate(['yte/thietbi']);
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
