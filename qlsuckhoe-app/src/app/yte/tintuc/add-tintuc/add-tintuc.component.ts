import { Component, OnInit, ViewChild, Input, Output,EventEmitter } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UploadTintucComponent } from './upload-tintuc/upload-tintuc.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TintucService } from 'src/app/service/tintuc.service';
import { Router } from '@angular/router';
export interface DialogData {
  img: string;
}
@Component({
  selector: 'app-add-tintuc',
  templateUrl: './add-tintuc.component.html',
  styleUrls: ['./add-tintuc.component.css']
})
export class AddTintucComponent implements OnInit {

  constructor(public router:Router,public tintucService:TintucService,public _fb:FormBuilder,public dialog: MatDialog) { }
  ckeConfig:any;
  showFiles=false;
  date:Date;
  tintuc:string;
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
  this.addForm=this._fb.group({
    tieude:['',Validators.required],
    ngaydang:['',Validators.required],
    noidung:['',Validators.required]
  });
  };
  Huy(){
    this.router.navigate(['yte/tintuc']);
  }
  openImageExplorer($event: any) {
    this.showFiles = true;
     // open pop-up window
  };
  view(){
    alert(this.addForm.controls.noidung.value);
  }
  Add()
  {
    this.addForm.controls.ngaydang.setValue(this.formatDate(this.date));
    this.tintucService.addDanhmuc(this.addForm.value).subscribe(data=>{
      alert("Thêm mới thành công!");
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
          link.setAttribute("src",url);
          this.ckeditor.instance.insertElement(link);
      }
      catch(error)
      {
          console.log((<Error>error).message);
      }

      this.showFiles = false; // close the pop-up window
  }
  formatDate(date:Date){
    let d=date.getDate()>=10?date.getDate():'0'+date.getDate();
    let m=(date.getMonth()+1)>=10?(date.getMonth()+1):'0'+(date.getMonth()+1);
    let y=date.getFullYear();
    return d+'/'+m+'/'+y;
  }
}
