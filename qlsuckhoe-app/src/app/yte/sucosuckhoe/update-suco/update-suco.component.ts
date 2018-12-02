import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DanhMuc } from 'src/app/model/danhmuc.model';
import { Thuocsc } from 'src/app/model/thuocsc.model';
import { Sucop } from 'src/app/model/sucop.model';
import { ltsc } from 'src/app/model/ltsc.model';
import { Thietbi } from 'src/app/model/thietbi.model';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { SucoService } from 'src/app/service/suco.service';
import { ThietbiService } from 'src/app/service/thietbi.service';
import { Router } from '@angular/router';
import { ThuocService } from 'src/app/service/thuoc.service';
import { Suco } from 'src/app/model/suco.model';
import { Thuoc } from 'src/app/model/thuoc.model';

@Component({
  selector: 'app-update-suco',
  templateUrl: './update-suco.component.html',
  styleUrls: ['./update-suco.component.css']
})
export class UpdateSucoComponent implements OnInit {
  check=false;
  addForm: FormGroup;
  dem:Number[]=[];
  ngay:string;
  danhmuc:DanhMuc=new DanhMuc();
  ng:string[];
  thuocsc:Thuocsc;
  sucop:Sucop=new Sucop();
  idthuocl:ltsc[];
  dates:String[]=[];
  date:Date;
  hoten:string;
  thuocs:Array<Thuoc[]>=[];
  thietbis:Thietbi[];
  idloaithuoc1:string;
  loaithuocs:Loaithuoc[];
  suco:Suco;
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
    this.suco=JSON.parse(localStorage.getItem('updateSuco'));
    this.hoten=this.suco.hoten+' - '+this.suco.masv;
    this.date= new Date(this.formatString(this.suco.ngay));
    this.addForm = this.formBuilder.group({
      idsinhvien: [this.suco.idsinhvien],
      hoten: [this.hoten, Validators.required],
      loaisuco:[this.suco.loaisuco,Validators.required],
      mucdo:[this.suco.mucdo,Validators.required],
      ngay:[this.date,Validators.required],
      bienphap:[this.suco.bienphap,Validators.required],
      thuocss:this.formBuilder.array([]),
      thietbiss:this.formBuilder.array([]),
      nguoixuly:[this.suco.nguoixuly,Validators.required]
    });
    this.suco.thuoc.forEach((key,value)=>{
      this.addthuocArray.insert(value,this.formBuilder.group({
        idloaithuoc:[key.thuoc.loaithuoc.idloaithuoc,Validators.required],
        idthuoc:[key.thuoc.idthuoc,Validators.required]
      }));
      this.thuocService.getAllthuocByidloaithuoc(Number(key.thuoc.loaithuoc.idloaithuoc)).subscribe(d=>{
        this.thuocs[value]=d;
      });
    });
    this.suco.thietbi.forEach((value,key)=>{
      this.addthietbiArray.insert(key,this.formBuilder.group({
        idthietbi:[value.thietbi.idthietbiyte,Validators.required]
      }));
    });
    this.addForm.controls.hoten.disable();
    this.check=true;
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
  Huy(){
    this.route.navigate(['yte/sucosuckhoe']);
  }
  addSuco(){
    let idthuocsc:Thuocsc[]=[];
    this.ngay=this.formatDate(this.date);
    this.sucop.idsinhvien=this.suco.idsinhvien;
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
      idthuocsc.push(this.thuocsc);
    })
    this.sucop.thuoc=idthuocsc;
    this.sucoService.updateSuco(this.suco.idsinhvien,this.suco.ngay,this.sucop).subscribe(data=>{
      alert("Cập nhật thành Công");
      this.route.navigate(['/yte/sucosuckhoe']);
    });
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
