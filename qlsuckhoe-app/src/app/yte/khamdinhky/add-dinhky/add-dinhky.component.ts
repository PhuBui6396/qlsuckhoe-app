import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { Router } from '@angular/router';
import { DanhmucService } from 'src/app/service/danhmuc.service';
import { DanhMuc } from 'src/app/model/danhmuc.model';
import { BenhService } from 'src/app/service/benh.service';
import { Dinhkyb } from 'src/app/model/danhkyb.model';
import { Dinhky } from 'src/app/model/dinhky.model';
import { DinhkyService } from 'src/app/service/dinhky.service';
@Component({
  selector: 'app-add-dinhky',
  templateUrl: './add-dinhky.component.html',
  styleUrls: ['./add-dinhky.component.css']
})
export class AddDinhkyComponent implements OnInit {

  constructor(private dinhkyService:DinhkyService,private _fb:FormBuilder,private route:Router,
    private benhService:BenhService,private danhmucService:DanhmucService) { }
  sinhvien:Sinhvien;
  iddanhmuc:string;
  dates:String[]=[];
  date:Date;
  check=false;
  xet:string='1';
  addForm:FormGroup;
  benhs:Array<Dinhkyb>=new Array();
  danhmucs:DanhMuc[];
  dinhky:Dinhky= new Dinhky();
  ngOnInit() {
    this.sinhvien=JSON.parse(localStorage.getItem('sinhvien'));
    this.addForm=this._fb.group({
      hoten: [this.sinhvien.hoten+' - '+this.sinhvien.masv, Validators.required],
      ngaykham:['',Validators.required],
      chieucao:['',Validators.required],
      cannang:['',Validators.required],
      huyetap:['',Validators.required],
      nhiptim:['',Validators.required],
      benh:this._fb.array([]),
      loaisuckhoe:[1,Validators.required],
      ketluan:[]
    });
    this.addForm.controls.hoten.disable();
    this.danhmucService.getAllDanhmuc().subscribe(data=>{
      data.forEach((value,key)=>{
          this.benhService.getAllBenhByIddanhmuc(data[key].iddanhmuc).subscribe(benh=>{
            let benhx= new Dinhkyb();
            benh.forEach(d=>{
              if(d.tenbenh=='Bình thường')
              {
                this.addDinhkyArray.insert(key,this.addBenh(d.idbenh));
                benhx.tendanhmuc=d.danhmuc.tendanhmuc;
                benhx.benh=benh;
                this.benhs[key]=benhx;
              }
              else{}
            });
          })
      });
    });
    this.check=true;
  }
  addBenh(idbenh:number){
      return this._fb.group({
        idbenh:[idbenh,Validators.required],
        chuandoan:['Không',Validators.required]
      });
  }
  get addDinhkyArray(){
    return  <FormArray>this.addForm.get('benh');
  }
  addDinhky(){
    this.dinhky.chieucao=this.addForm.controls.chieucao.value;
    this.dinhky.ngaykham=this.formatDate(this.date);
    this.dinhky.cannang=this.addForm.controls.cannang.value;
    this.dinhky.huyetap=this.addForm.controls.huyetap.value;
    this.dinhky.nhiptim=this.addForm.controls.nhiptim.value;
    this.dinhky.idbenh=this.addForm.controls.benh.value;
    this.dinhky.loaisuckhoe=this.addForm.controls.loaisuckhoe.value;
    this.dinhky.ketluan=this.addForm.controls.ketluan.value;
    this.dinhky.idsinhvien=this.sinhvien.idsinhvien;
    this.dinhky.idhocki=Number(localStorage.getItem('idhocki'));
    this.dinhkyService.addDinhky(this.dinhky).subscribe(data=>{
      alert("Thành Công");
      this.route.navigate(['yte/khamdinhky']);
    });
  }
  formatString(date1:string){
    this.dates=date1.split('/');
    return this.dates[1]+'/'+this.dates[0]+'/'+this.dates[2];
  }
  Huy(){
    this.route.navigate(['yte/khamdinhky']);
  }
  formatDate(date:Date){
    let d=date.getDate()>=10?date.getDate():'0'+date.getDate();
    let m=(date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
    let y=date.getFullYear();
    return d+'/'+m+'/'+y;
  }
}
