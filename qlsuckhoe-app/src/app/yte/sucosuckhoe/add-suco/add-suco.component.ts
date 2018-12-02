import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';
import { ThuocService } from 'src/app/service/thuoc.service';
import { ThietbiService } from 'src/app/service/thietbi.service';
import { Thietbi } from 'src/app/model/thietbi.model';
import { Sucop } from 'src/app/model/sucop.model';
import { ltsc } from 'src/app/model/ltsc.model';
import { Thuocsc } from 'src/app/model/thuocsc.model';
import { SucoService } from 'src/app/service/suco.service';
import { Router } from '@angular/router';
import { DanhMuc } from 'src/app/model/danhmuc.model';

@Component({
  selector: 'app-add-suco',
  templateUrl: './add-suco.component.html',
  styleUrls: ['./add-suco.component.css']
})
export class AddSucoComponent implements OnInit {
  addForm: FormGroup;
  ngay:string;
  danhmuc:DanhMuc=new DanhMuc();
  ng:string[];
  thuocsc:Thuocsc;
  idthuocsc:Thuocsc[]=[];
  sucop:Sucop=new Sucop();
  idthuocl:ltsc[];
  dates:String[]=[];
  date:Date;
  hoten:string;
  thuocs:Object[]=[];
  thietbis:Thietbi[];
  idloaithuoc1:string;
  loaithuocs:Loaithuoc[];
  sinhviens:Sinhvien[];
  sinhvien:Sinhvien;
  constructor(
    private formBuilder: FormBuilder,private loaithuocService:LoaithuocService,private thuocService:ThuocService,
    private sucoService:SucoService,private thietbiService:ThietbiService,private route:Router
  ) {}
  ngOnInit() {
    this.loaithuocService.getAllloaithuoc().subscribe(data=>{
      this.loaithuocs=data;
    });
    this.thietbiService.findAllThietbi().subscribe(data=>{
        this.thietbis=data;
    })
    this.sinhvien=JSON.parse(localStorage.getItem('fsinhvien'));
    this.hoten=this.sinhvien.hoten+' - '+this.sinhvien.masv;
    this.addForm = this.formBuilder.group({
      id: [],
      hoten: [this.hoten, Validators.required],
      loaisuco:['',Validators.required],
      mucdo:['',Validators.required],
      ngay:['',Validators.required],
      bienphap:['',Validators.required],
      thuocss:this.formBuilder.array([]),
      thietbiss:this.formBuilder.array([]),
      nguoixuly:['',Validators.required]
    });
    this.addForm.controls.hoten.disable();
  }
  addThietbiGroup(){
    return this.formBuilder.group({
      idthietbi:[]
  });
  }
  get addthietbiArray(){
    return <FormArray>this.addForm.get('thietbiss');
  }
  addThietbi(){
    this.addthietbiArray.push(this.addThietbiGroup());
  }
  deleteThietbi(index){
    this.addthietbiArray.removeAt(index);
  }
  addThuocGroup(){
    return this.formBuilder.group({
        idloaithuoc:[],
        idthuoc:[]
    });
  }
  get addthuocArray(){
    return <FormArray>this.addForm.get('thuocss');
  }
  addThuoc(){
    this.addthuocArray.push(this.addThuocGroup());
  }
  deleteThuoc(index){
    this.addthuocArray.removeAt(index);
  }
  get f()
  {
    return this.addForm.controls;
  }
  onChange(idloaithuoc,index){
    if(idloaithuoc==undefined)
    {
      
    }
    else{
      this.thuocService.getAllthuocByidloaithuoc(idloaithuoc).subscribe(data=>{
        this.thuocs[index]=data;
      });
    }
  }
  addSuco(){
    this.ngay=this.formatDate(this.date);
    this.sucop.idsinhvien=this.sinhvien.idsinhvien;
    this.sucop.loaisuco=this.f.loaisuco.value;
    this.sucop.mucdo=this.f.mucdo.value;
    this.sucop.ngay=this.ngay;
    this.sucop.bienphap=this.f.bienphap.value;
    this.sucop.nguoixuly=this.f.nguoixuly.value;
    this.sucop.thietbi=this.f.thietbiss.value;
    this.idthuocl=this.f.thuocss.value;
    this.idthuocl.forEach(data=>{
      this.thuocsc=new Thuocsc();
      this.thuocsc.idthuoc=data.idthuoc;
      this.idthuocsc.push(this.thuocsc);
    })
    this.sucop.thuoc=this.idthuocsc;
    this.sucoService.addSuco(this.sucop).subscribe(data=>{
      alert("Thêm Mới Thành Công");
      this.route.navigate(['yte/sucosuckhoe']);
    })
  }
  Huy(){
    this.route.navigate(['yte/sucosuckhoe']);
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
}
