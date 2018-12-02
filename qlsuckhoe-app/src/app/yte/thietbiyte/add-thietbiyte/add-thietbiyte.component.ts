import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThietbiService } from 'src/app/service/thietbi.service';
import { CongtyService } from 'src/app/service/congty.service';
import { Nhasanxuat } from 'src/app/model/nhasanxuat.model';

@Component({
  selector: 'app-add-thietbiyte',
  templateUrl: './add-thietbiyte.component.html',
  styleUrls: ['./add-thietbiyte.component.css']
})
export class AddThietbiyteComponent implements OnInit {

  constructor(private congtyService:CongtyService,private _fb:FormBuilder,private route:Router,private thietbiService:ThietbiService) {}
  addForm:FormGroup;
  dates:String[]=[];
  date:Date;
  congtys:Nhasanxuat[];
  ngOnInit() {
    this.addForm=this._fb.group({
      tenthietbi:['',Validators.required],
      idnhasanxuat:['',Validators.required],
      ngaynhap:['',Validators.required],
      soluong:['',Validators.required],
      cachdung:['',Validators.required]
    });
    this.congtyService.getAllCongty().subscribe(data=>{
        this.congtys=data;
        this.addForm.controls.idnhasanxuat.setValue(this.congtys[0].idnhasanxuat);
    });
  }
  Add(){
    this.addForm.controls.ngaynhap.setValue(this.formatDate(this.date));
    this.thietbiService.addThietbi(this.addForm.value).subscribe(data=>{
      alert("Thêm mới thành công");
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
