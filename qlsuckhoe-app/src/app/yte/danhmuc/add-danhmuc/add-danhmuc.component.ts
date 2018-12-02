import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DanhmucService } from 'src/app/service/danhmuc.service';

@Component({
  selector: 'app-add-danhmuc',
  templateUrl: './add-danhmuc.component.html',
  styleUrls: ['./add-danhmuc.component.css']
})
export class AddDanhmucComponent implements OnInit {

  constructor(private _fb:FormBuilder,private route:Router,private danhmucService:DanhmucService) {}
  addForm:FormGroup;
  ngOnInit() {
    this.addForm=this._fb.group({
      tendanhmucs:this._fb.array([this.addDanhmucGroup()])
    });
  }
  addDanhmucGroup(){
    return this._fb.group({
      tendanhmuc:[]
    });
  }
  get addDanhmucArray(){
    return <FormArray>this.addForm.get('tendanhmucs');
  }
  addDanhmuc(){
    this.addDanhmucArray.push(this.addDanhmucGroup());
  }
  deleteDanhmuc(index){
    this.addDanhmucArray.removeAt(index);
  }
  Add(){
    this.danhmucService.addDanhmuc(this.addForm.controls.tendanhmucs.value).subscribe(data=>{
      alert("Thêm mới thành công");
      this.route.navigate(['yte/danhmuc']);
    })
  }
  Huy(){
    this.route.navigate(['yte/danhmuc']);
  }
}
