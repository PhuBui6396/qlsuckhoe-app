import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-sinhvien',
  templateUrl: './update-sinhvien.component.html',
  styleUrls: ['./update-sinhvien.component.css']
})
export class UpdateSinhvienComponent implements OnInit {

  constructor(private route:Router,private _fb:FormBuilder,private sinhvienService:SinhvienService) { }
  updateForm:FormGroup;
  dates:String[]=[];
  sinhvien:Sinhvien;
  idsinhvien:number;
  date:Date;
  ngOnInit() {
    this.sinhvien=JSON.parse(localStorage.getItem('putSinhvien'));
    this.idsinhvien=this.sinhvien.idsinhvien;
    this.date=new Date(this.formatString(this.sinhvien.namsinh));
    this.updateForm=this._fb.group({
      hoten:[this.sinhvien.hoten,Validators.required],
      masv:[this.sinhvien.masv,Validators.required],
      gioitinh:[this.sinhvien.gioitinh,Validators.required],
      namsinh:[this.date,Validators.required],
      socmt:[this.sinhvien.socmt,Validators.required],
      diachi:[this.sinhvien.diachi,Validators.required],
      chuyennganh:[this.sinhvien.chuyennganh,Validators.required],
      khoa:[this.sinhvien.khoa,Validators.required],
      matkhau:[this.sinhvien.matkhau,Validators.required],
    });
  }
  Update(){
    if(confirm("Xác nhận sửa ?")){
      this.updateForm.controls.namsinh.setValue(this.formatDate(this.date));
      this.sinhvienService.putSinhvien(this.idsinhvien,this.updateForm.value).subscribe(data=>{
          alert("Cập nhật thành công");
          this.route.navigate(['quantri']);
      });
    }
    else{}
  }
  Huy(){
    localStorage.removeItem('putSinhvien');
    this.route.navigate(['quantri']);
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
