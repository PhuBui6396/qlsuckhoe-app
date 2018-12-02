import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DinhkyService } from 'src/app/service/dinhky.service';
import { Dinhky2 } from 'src/app/model/dinhky2.model';
import { Dinhkyb } from 'src/app/model/danhkyb.model';
import { BenhService } from 'src/app/service/benh.service';

@Component({
  selector: 'app-update-dinhky',
  templateUrl: './update-dinhky.component.html',
  styleUrls: ['./update-dinhky.component.css']
})
export class UpdateDinhkyComponent implements OnInit {

  constructor(private benhService:BenhService,private _fb:FormBuilder,private route:Router,private dinhkyService:DinhkyService) { }
  dates:String[]=[];
  date:Date;
  updateForm:FormGroup;
  check=false;
  dinhky:Dinhky2;
  benhs:Array<Dinhkyb>=new Array();
  hoten:string;
  ngOnInit() {
    this.dinhky=JSON.parse(localStorage.getItem('updateDinhky'));
    this.hoten=this.dinhky.hoten+' - '+this.dinhky.masv;
    this.date=new Date(this.formatString(this.dinhky.ngaykham));
    this.updateForm=this._fb.group({
      ngaykham:[this.date,Validators.required],
      chieucao:[this.dinhky.chieucao,Validators.required],
      cannang:[this.dinhky.cannang,Validators.required],
      huyetap:[this.dinhky.huyetap,Validators.required],
      nhiptim:[this.dinhky.nhiptim,Validators.required],
      ketqua:this._fb.array([]),
      loaisuckhoe:[Number(this.dinhky.loaisuckhoe),Validators.required],
      ketluan:[this.dinhky.ketluan,Validators.required]
    });
    this.dinhky.ketqua.forEach((value,key)=>{
      console.log(value.benh.tenbenh);
      this.benhService.getAllBenhByIddanhmuc(value.benh.danhmuc.iddanhmuc).subscribe(benh=>{
          let benhx= new Dinhkyb();
          benhx.tendanhmuc=value.benh.danhmuc.tendanhmuc;
          benhx.benh=benh;
          this.benhs[key]=benhx;
          this.addDinhkyArray.insert(key,this.addKetqua(value.iddinhky,value.benh.idbenh,value.chuandoan));
      });
    });
    this.check=true;
  }
addKetqua(iddinhky:number,idbenh:number,chuandoan:string){
    return this._fb.group({
      iddinhky:[iddinhky,Validators.required],
      idbenh:[idbenh,Validators.required],
      chuandoan:[chuandoan,Validators.required]
    });
}
get addDinhkyArray(){
  return  <FormArray>this.updateForm.get('ketqua');
}
updateDinhky(){
  this.updateForm.controls.ngaykham.setValue(this.formatDate(this.date));
  this.dinhkyService.updateDinhky(this.updateForm.value).subscribe(data=>{
    alert("Cập nhật thành công");
    this.route.navigate(['yte/khamdinhky']);
  })
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
  Huy(){
    this.route.navigate(['yte/khamdinhky']);
  }
}
