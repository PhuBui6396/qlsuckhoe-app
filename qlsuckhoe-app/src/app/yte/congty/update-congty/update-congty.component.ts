import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Congty } from 'src/app/model/congty.model';
import { CongtyService } from 'src/app/service/congty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-congty',
  templateUrl: './update-congty.component.html',
  styleUrls: ['./update-congty.component.css']
})
export class UpdateCongtyComponent implements OnInit {

  constructor(private _fb:FormBuilder,private CongtyService:CongtyService,private route:Router) { }
  congty:Congty;
  updateForm:FormGroup;
  idCongty:number;
  ngOnInit() {
    this.congty=JSON.parse(localStorage.getItem('updateCongty'));
    this.idCongty=this.congty.idnhasanxuat;
    this.updateForm=this._fb.group({
      tennhasanxuat:[this.congty.tennhasanxuat,Validators.required]
    });
  }
  Update(){
    this.CongtyService.putCongty(this.idCongty,this.updateForm.value).subscribe(data=>{
        alert("Cập nhật thành công");
        this.route.navigate(['yte/congty']);
        location.reload();
    });
  }
  Huy(){
    this.route.navigate(['yte/congty']);
  }
}
