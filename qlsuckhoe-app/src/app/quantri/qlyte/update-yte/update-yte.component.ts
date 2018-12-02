import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Yte } from 'src/app/model/yte.model';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-yte',
  templateUrl: './update-yte.component.html',
  styleUrls: ['./update-yte.component.css']
})
export class UpdateYteComponent implements OnInit {

  constructor(private _fb:FormBuilder,private adminService:AdminService,private route:Router) { }
  updateForm:FormGroup;
  yte:Yte;
  dates:String[]=[];
  date:Date;
  idyte:number;
  ngOnInit() {
    this.yte=JSON.parse(localStorage.getItem('updateYte'));
    this.date=new Date(this.formatString(this.yte.namsinh));
    this.idyte=this.yte.idyte;
    this.updateForm=this._fb.group({
      hoten:[this.yte.hoten,Validators.required],
      gioitinh:[this.yte.gioitinh,Validators.required],
      namsinh:[this.yte.namsinh,Validators.required],
      socmt:[this.yte.socmt,Validators.required],
      diachi:[this.yte.diachi,Validators.required],
      sodt:[this.yte.sodt,Validators.required],
      chucvu:[this.yte.chucvu,Validators.required],
      tendangnhap:[this.yte.tendangnhap,Validators.required],
      matkhau:[this.yte.matkhau,Validators.required],
      idrole:[3,Validators.required]
    });
  }
  Huy(){
    localStorage.removeItem('putSinhvien');
    this.route.navigate(['quantri/yte']);
  }
  formatString(date1:string){
    this.dates=date1.split('/');
    return this.dates[1]+'/'+this.dates[0]+'/'+this.dates[2];
  }
  Update(){
    if(confirm("Xác nhận sửa ?")){
      this.updateForm.controls.namsinh.setValue(this.formatDate(this.date));
      this.adminService.putYte(this.idyte,this.updateForm.value).subscribe(data=>{
          alert("Cập nhật thành công");
          this.route.navigate(['quantri/yte']);
      });
    }
    else{}
  }
  formatDate(date:Date){
    let d=date.getDate()>=10?date.getDate():'0'+date.getDate();
    let m=(date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
    let y=date.getFullYear();
    return d+'/'+m+'/'+y;
  }
}
