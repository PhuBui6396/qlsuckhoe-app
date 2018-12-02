import { Component, OnInit, ViewChild } from '@angular/core';
import { Suco } from 'src/app/model/suco.model';
import { SucoService } from 'src/app/service/suco.service';
import { DinhkyComponent } from 'src/app/yte/hososv/dinhky/dinhky.component';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { User } from 'src/app/model/user.model';
import { SinhvienService } from 'src/app/service/sinhvien.service';

@Component({
  selector: 'app-sucosuckhoe',
  templateUrl: './sucosuckhoe.component.html',
  styleUrls: ['./sucosuckhoe.component.css']
})
export class SucosuckhoeSVComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService,private dialog:MatDialog,private sucoService:SucoService) { }
  sucoView:Object;
  displayedColumnsSuco: string[] = ['hoten', 'masv', 'ngay','loaisuco','mucdo','nguoixuly','idsinhvien'];
  dataSourceSuco:MatTableDataSource<Suco>;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  sinhvien:Sinhvien;
  ngOnInit() {
    let Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    this.sinhvienService.findSinhvienId(Userlogin.iduser).subscribe(data=>{
      this.sinhvien=data;
      this.sucoService.findByidsinhvien(data.idsinhvien).subscribe(d=>{
        this.dataSourceSuco= new MatTableDataSource(d);
        this.dataSourceSuco.paginator=this.paginator;
      });
    });
  }
  viewSuco(suco:Suco){
    this.sucoService.findByNgay(suco.idsinhvien,suco.ngay).subscribe(data=>{
      this.sucoView=data;
      let dialogRef = this.dialog.open(DinhkyComponent, {
      width: '700px',
      data: this.sucoView
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    })
  }
}
