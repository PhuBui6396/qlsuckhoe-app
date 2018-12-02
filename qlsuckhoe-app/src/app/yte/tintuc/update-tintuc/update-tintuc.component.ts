import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TintucService } from 'src/app/service/tintuc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Tintuc } from 'src/app/model/tintuc.model';

@Component({
  selector: 'app-update-tintuc',
  templateUrl: './update-tintuc.component.html',
  styleUrls: ['./update-tintuc.component.css']
})
export class UpdateTintucComponent implements OnInit {

  constructor(public router:Router,public tintucService:TintucService,public _fb:FormBuilder,public dialog: MatDialog) { }
  ckeConfig:any;
  showFiles=false;
  date:Date;
  tintuc:string;
  tt:Tintuc;
  dates:String[]=[];
  check=false;
  img='dsadsa';
  addForm:FormGroup;
  @ViewChild('ckeditor') ckeditor:any;
  ngOnInit() {
    this.ckeConfig = {
      height: 300,
      language: "en",
      allowedContent: true
  };
  this.tt=JSON.parse(localStorage.getItem('updateTintuc'));
  this.date=new Date(this.formatString(this.tt.ngaydang));
  this.tintuc=this.tt.noidung;
  this.addForm=this._fb.group({
    tieude:[this.tt.tieude,Validators.required],
    ngaydang:[this.date,Validators.required],
    noidung:[this.tt.noidung,Validators.required]
  });
  };
  openImageExplorer($event: any) {
    this.showFiles = true;
     // open pop-up window
  };
  Huy(){
    this.router.navigate(['yte/tintuc']);
  }
  view(){
    alert(this.addForm.controls.noidung.value);
  }
  Add()
  {
    
    this.addForm.controls.ngaydang.setValue(this.formatDate(this.date));
    this.tintucService.putDanhmuc(this.tt.idtintuc,this.addForm.value).subscribe(data=>{
      alert("Cập nhật thành công!");
      this.router.navigate(['yte/tintuc']);
    });
  }
  onCloseImage() {
    this.showFiles = false; // close the pop-up window
  }
  onAddImage() {
      try
      {
          let url=localStorage.getItem('urlImage');
          let link = this.ckeditor.instance.document.createElement("img");
          link.setAttribute("alt", "img");
          link.setAttribute("src", url);
          this.ckeditor.instance.insertElement(link);
      }
      catch(error)
      {
          console.log((<Error>error).message);
      }

      this.showFiles = false; // close the pop-up window
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
