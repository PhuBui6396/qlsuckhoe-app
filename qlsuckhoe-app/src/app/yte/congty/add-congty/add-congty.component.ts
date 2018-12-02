import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CongtyService } from 'src/app/service/congty.service';

@Component({
  selector: 'app-add-congty',
  templateUrl: './add-congty.component.html',
  styleUrls: ['./add-congty.component.css']
})
export class AddCongtyComponent implements OnInit {

  constructor(private _fb:FormBuilder,private route:Router,private congtyService:CongtyService) {}
  addForm:FormGroup;
  ngOnInit() {
    this.addForm=this._fb.group({
      tennhasanxuats:this._fb.array([this.addcongtyGroup()])
    });
  }
  addcongtyGroup(){
    return this._fb.group({
      tennhasanxuat:[]
    });
  }
  get addNhaSanXuatArray(){
    return <FormArray>this.addForm.get('tennhasanxuats');
  }
  addNhasanxuat(){
    this.addNhaSanXuatArray.push(this.addcongtyGroup());
  }
  deleteNhasanxuat(index){
    this.addNhaSanXuatArray.removeAt(index);
  }
  Add(){
    this.congtyService.addCongty(this.addForm.controls.tennhasanxuats.value).subscribe(data=>{
      alert("Thêm mới thành công");
      this.route.navigate(['yte/congty']);
    })
  }
  Huy(){
    this.route.navigate(['yte/congty']);
  }
}
