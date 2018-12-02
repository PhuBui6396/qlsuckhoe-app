import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dinhky2 } from 'src/app/model/dinhky2.model';

@Component({
  selector: 'app-suco',
  templateUrl: './suco.component.html',
  styleUrls: ['./suco.component.css']
})
export class SucoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SucoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dinhky2) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
