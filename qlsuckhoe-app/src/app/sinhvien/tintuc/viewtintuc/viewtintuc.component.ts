import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Tintuc } from 'src/app/model/tintuc.model';

@Component({
  selector: 'app-viewtintuc',
  templateUrl: './viewtintuc.component.html',
  styleUrls: ['./viewtintuc.component.css']
})
export class ViewtintucComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewtintucComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tintuc) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
