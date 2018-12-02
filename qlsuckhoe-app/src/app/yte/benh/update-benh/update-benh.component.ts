import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DanhmucService } from 'src/app/service/danhmuc.service';
import { BenhService } from 'src/app/service/benh.service';
import { Router } from '@angular/router';
import { DanhMuc } from 'src/app/model/danhmuc.model';
import { Benh } from 'src/app/model/benh.model';

@Component({
  selector: 'app-update-benh',
  templateUrl: './update-benh.component.html',
  styleUrls: ['./update-benh.component.css']
})
export class UpdateBenhComponent implements OnInit {
  constructor(private danhmucService:DanhmucService,private _fb:FormBuilder,private route:Router,private benhService:BenhService) {}
  updateForm:FormGroup;
  idbenh:number;
  benh:Benh;
  danhmucs:DanhMuc[];
  ngOnInit() {
    this.benh=JSON.parse(localStorage.getItem('updateBenh'));
    this.idbenh=this.benh.idbenh;
    this.updateForm=this._fb.group({
      tenbenh:[this.benh.tenbenh,Validators.required],
      iddanhmuc:[this.benh.danhmuc.iddanhmuc,Validators.required],
      trieuchung:[this.benh.trieuchung,Validators.required],
      cachchua:[this.benh.cachchua,Validators.required]
    });
    this.danhmucService.getAllDanhmuc().subscribe(data=>{
        this.danhmucs=data;
    });
  }
  Add(){
    this.benhService.updateBenh(this.idbenh,this.updateForm.value).subscribe(data=>{
      alert("Cập nhật thành công");
      this.route.navigate(['yte/benh']);
    });
  }
  Huy(){
    this.route.navigate(['yte/benh']);
  }

}
