import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../add-tintuc.component';

@Component({
  selector: 'app-upload-tintuc',
  templateUrl: './upload-tintuc.component.html',
  styleUrls: ['./upload-tintuc.component.css']
})
export class UploadTintucComponent implements OnInit {
  @Input() visible: boolean;
  selectedFile:File;
  imgName:string;
  imgData:any;
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDecline: EventEmitter<void> = new EventEmitter<void>();
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    localStorage.removeItem('urlImage');
    this.imgName='/assets/img/'+this.selectedFile.name;
    localStorage.setItem('urlImage',this.imgName);
    this.onConfirm.emit();
  }
  close() {
      this.onDecline.emit();
  }
  ngOnInit(){

  }

}
