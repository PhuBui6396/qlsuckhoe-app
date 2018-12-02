import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dinhky',
  templateUrl: './dinhky.component.html',
  styleUrls: ['./dinhky.component.css']
})
export class DinhkyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DinhkyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
