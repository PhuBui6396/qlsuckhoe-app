import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HockiService } from 'src/app/service/hocki.service';

@Component({
  selector: 'app-add-hocki',
  templateUrl: './add-hocki.component.html',
  styleUrls: ['./add-hocki.component.css']
})
export class AddHockiComponent implements OnInit {

  constructor(private _fb:FormBuilder,private route:Router,private hockiService:HockiService) {}
  addForm:FormGroup
  ngOnInit() {
    this.addForm=this._fb.group({
      tenhockis:this._fb.array([this.addHockiGroup()])
    });
  }
  addHockiGroup(){
    return this._fb.group({
      tenhocki:[]
    });
  }
  get addHockiArray(){
    return <FormArray>this.addForm.get('tenhockis');
  }
  addHocki(){
    this.addHockiArray.push(this.addHockiGroup());
  }
  deleteHocki(index){
    this.addHockiArray.removeAt(index);
  }
  Add(){
    this.hockiService.addHocki(this.addForm.controls.tenhockis.value).subscribe(data=>{
      alert("Thêm mới thành công");
      this.route.navigate(['quantri/hocki']);
    })
  }
  Huy(){
    this.route.navigate(['quantri/hocki']);
  }
}
