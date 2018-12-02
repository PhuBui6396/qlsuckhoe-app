import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DanhmucService } from 'src/app/service/danhmuc.service';
import { Router } from '@angular/router';
import { BenhService } from 'src/app/service/benh.service';
import { DanhMuc } from 'src/app/model/danhmuc.model';

@Component({
  selector: 'app-add-benh',
  templateUrl: './add-benh.component.html',
  styleUrls: ['./add-benh.component.css']
})
export class AddBenhComponent implements OnInit {

  constructor(private danhmucService:DanhmucService,private _fb:FormBuilder,private route:Router,private benhService:BenhService) {}
  addForm:FormGroup;
  dates:String[]=[];
  date:Date;
  danhmucs:DanhMuc[];
  ngOnInit() {
    this.addForm=this._fb.group({
      tenbenh:['',Validators.required],
      iddanhmuc:['',Validators.required],
      trieuchung:['',Validators.required],
      cachchua:['',Validators.required]
    });
    this.danhmucService.getAllDanhmuc().subscribe(data=>{
        this.danhmucs=data;
        this.addForm.controls.iddanhmuc.setValue(this.danhmucs[0].iddanhmuc);
    });
  }
  Add(){
    this.benhService.addBenh(this.addForm.value).subscribe(data=>{
      alert("Thêm mới thành công");
      this.route.navigate(['yte/benh']);
    });
  }
  Huy(){
    this.route.navigate(['yte/benh']);
  }

}
