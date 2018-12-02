import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-yte',
  templateUrl: './add-yte.component.html',
  styleUrls: ['./add-yte.component.css']
})
export class AddYteComponent implements OnInit {

  constructor(private route:Router,private _fb:FormBuilder,private adminService:AdminService) { }
  addForm:FormGroup;
  date:Date;
  ngOnInit() {
    this.addForm=this._fb.group({
      hoten:['',Validators.required],
      gioitinh:['Nam',Validators.required],
      namsinh:['',Validators.required],
      socmt:['',Validators.required],
      diachi:['',Validators.required],
      sodt:['',Validators.required],
      chucvu:['',Validators.required],
      tendangnhap:['',Validators.required],
      matkhau:['',Validators.required],
      idrole:[3,Validators.required]
    });
  }
  Add(){
    this.addForm.controls.namsinh.setValue(this.formatDate(this.date))
    this.adminService.addYte(this.addForm.value).subscribe(data=>{
        alert("Thêm mới thành công");
        this.route.navigate(['quantri/yte']);
    });
  }
  Huy(){
    this.route.navigate(['quantri/yte']);
  }
  formatDate(date:Date){
    let d=date.getDate()>=10?date.getDate():'0'+date.getDate();
    let m=(date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
    let y=date.getFullYear();
    return d+'/'+m+'/'+y;
  }
}
