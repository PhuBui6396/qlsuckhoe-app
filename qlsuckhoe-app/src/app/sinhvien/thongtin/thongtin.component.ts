import { Component, OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { User } from 'src/app/model/user.model';
import { MatDialog } from '@angular/material';
import { PasswordComponent } from './password/password.component';

@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService,private dialog:MatDialog) { }
  sv:Sinhvien;
  ngOnInit() {
    let Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    this.sinhvienService.findSinhvienId(Userlogin.iduser).subscribe(data=>{
      this.sv=data;
    });
  }
  Change(){
    let dialogRef = this.dialog.open(PasswordComponent, {
      width: '400px',
      data:this.sv
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
