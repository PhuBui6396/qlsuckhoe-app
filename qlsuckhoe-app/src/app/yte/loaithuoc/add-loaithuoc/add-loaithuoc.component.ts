import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';

@Component({
  selector: 'app-add-loaithuoc',
  templateUrl: './add-loaithuoc.component.html',
  styleUrls: ['./add-loaithuoc.component.css']
})
export class AddLoaithuocComponent implements OnInit {
  constructor(private _fb:FormBuilder,private route:Router,private loaithuocService:LoaithuocService) {}
  addForm:FormGroup;
  ngOnInit() {
    this.addForm=this._fb.group({
      tenloaithuocs:this._fb.array([this.addloaithuocGroup()])
    });
  }
  addloaithuocGroup(){
    return this._fb.group({
      tenloai:[]
    });
  }
  get addloaithuocArray(){
    return <FormArray>this.addForm.get('tenloaithuocs');
  }
  addLoaithuoc(){
    this.addloaithuocArray.push(this.addloaithuocGroup());
  }
  deleteLoaithuoc(index){
    this.addloaithuocArray.removeAt(index);
  }
  Add(){
    this.loaithuocService.addLoaithuoc(this.addForm.controls.tenloaithuocs.value).subscribe(data=>{
      alert("Thêm mới thành công");
      this.route.navigate(['yte/loaithuoc']);
    })
  }
  Huy(){
    this.route.navigate(['yte/loaithuoc']);
  }
}
