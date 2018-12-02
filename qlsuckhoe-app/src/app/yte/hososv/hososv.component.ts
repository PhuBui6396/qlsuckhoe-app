import { Component, OnInit, ViewChild, QueryList, ViewChildren, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DinhkyService } from 'src/app/service/dinhky.service';
import { Dinhky1 } from 'src/app/model/dinhky1.model';
import { Suco } from 'src/app/model/suco.model';
import { SucoService } from 'src/app/service/suco.service';
import { HockiService } from 'src/app/service/hocki.service';
import { Hocki } from 'src/app/model/hocki.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SucoComponent } from './suco/suco.component';
import { Dinhky2 } from 'src/app/model/dinhky2.model';
import { DinhkyComponent } from './dinhky/dinhky.component';
@Component({
  selector: 'app-hososv',
  templateUrl: './hososv.component.html',
  styleUrls: ['./hososv.component.css']
})
export class HososvComponent implements OnInit {
  constructor(public dialog: MatDialog,private hockiService:HockiService,private sucoService:SucoService,private dinhkyService:DinhkyService,private route:Router,private sinhvienService:SinhvienService) { }
  displayedColumns: string[] = ['hoten', 'masv', 'diachi','gioitinh','chuyennganh','khoa','idsinhvien'];
  displayedColumnsSuco: string[] = ['hoten', 'masv', 'ngay','loaisuco','mucdo','nguoixuly','idsinhvien'];
  displayedColumnsDinhki: string[] = ['hoten', 'masv', 'ngaykham','chieucao','cannang','ketluan','ketqua'];
  dataSource: MatTableDataSource<Sinhvien>;
  checkLogin=true;
  dataSourceSuco:MatTableDataSource<Suco>;
  dataSourceDinhki:MatTableDataSource<Dinhky1>;
  @ViewChildren(MatPaginator) paginator=new QueryList<MatPaginator>();
  @ViewChild(MatSort) sort: MatSort;
  idhocki:number;
  sinhvien:Sinhvien;
  dinhky:Dinhky1;
  dinhkyView:Dinhky2;
  sucoView:Object;
  hockis:Hocki[];
  khoas:Object;
  khoa:string;
  chuyennganhs:Object;
  chuyennganh:string;
  sv:boolean=true;
  sc:boolean=false;
  kq:boolean=false;
  ngOnInit() {
    this.sinhvienService.findAllsv().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator.toArray()[0];
    });
    this.sinhvienService.findAllChuyennganh().subscribe(data=>{
      this.chuyennganhs=data;
    });
    this.sinhvienService.findAllKhoa().subscribe(data=>{
      this.khoas=data;
    });
  }
  onChangekhoa(khoa){
    if(this.chuyennganh==null){}
    else{
      this.sinhvienService.findSvChuyennganh(khoa,this.chuyennganh).subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator.toArray()[0];
      });
    }
  }
  onChangeChuyennganh(chuyennganh){
    if(this.khoa==null){
    }
    else{
      this.sinhvienService.findSvChuyennganh(this.khoa,chuyennganh).subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator.toArray()[0];
      });
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getSinhvien(sinhvien){
    this.sv=true;
    this.sc=false;
    this.kq=false;
    this.sinhvien=sinhvien;
    this.dinhky=new Dinhky1();
    this.dinhkyService.findkq(this.sinhvien.idsinhvien).subscribe(data=>{
      this.dinhky=data;
    });
  }
  findsv(){
    this.sv=true;
    this.sc=false;
    this.kq=false;
  }
  findsuco(){
    this.sv=false;
    this.sc=true;
    this.kq=false;
    this.sucoService.findByidsinhvien(this.sinhvien.idsinhvien).subscribe(data=>{
      this.dataSourceSuco= new MatTableDataSource(data);
      this.dataSourceSuco.paginator=this.paginator.toArray()[1];

    });
  }
  findketqua(){
    this.idhocki=0;
    this.dataSourceDinhki=new MatTableDataSource();
    this.sv=false;
    this.sc=false;
    this.kq=true;
    this.hockiService.getAllHocki().subscribe(data=>{
      this.hockis=data;
    })
  }
  onChangeHocki(idhocki){
    this.dinhkyService.findKetquaDinhky(this.sinhvien.idsinhvien,idhocki).subscribe(data=>{
      this.dataSourceDinhki= new MatTableDataSource(data);
      this.dataSourceDinhki.paginator=this.paginator.toArray()[2];
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
  viewKetqua(dinhky:Dinhky2)
  {
    this.dinhkyView=dinhky;
    let dialogRef = this.dialog.open(SucoComponent, {
      width: '700px',
      data: this.dinhkyView
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

