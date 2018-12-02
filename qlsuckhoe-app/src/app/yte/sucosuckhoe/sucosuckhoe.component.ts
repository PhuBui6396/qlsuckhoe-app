import { Component, OnInit, ViewChild } from '@angular/core';
import { Suco } from 'src/app/model/suco.model';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { SucoService } from 'src/app/service/suco.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Khoa } from 'src/app/model/khoa.model';
import { Sucop } from 'src/app/model/sucop.model';

@Component({
  selector: 'app-sucosuckhoe',
  templateUrl: './sucosuckhoe.component.html',
  styleUrls: ['./sucosuckhoe.component.css']
})
export class SucosuckhoeComponent implements OnInit {

  constructor(private router: Router,private sucoService:SucoService,private SinhvienService:SinhvienService) { }
  masv = new FormControl('');
  sinhvien:Sinhvien[];
  displayedColumns: string[] = ['hoten','gioitinh','masv','diachi','chuyennganh','khoa','idsinhvien'];
  displayedColumnsKham:string[]=['hoten','masv','ngay','loaisuco','mucdo','idsinhvien'];
  dataSource: MatTableDataSource<Sinhvien>;
  dataSourceKham:MatTableDataSource<Suco>
  xetsuco:number=1;
  khoa:string='';
  khoas:Khoa[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Sucos:Suco[];
  ngOnInit() {
    this.xetsuco=Number(localStorage.getItem('xetsuco'))==null?1:Number(localStorage.getItem('xetsuco'));
    this.khoa=localStorage.getItem('xetkhoasuco');
    this.SinhvienService.findAllKhoa().subscribe(data=>{
      this.khoas=data;
    })
    if(this.khoa==null){}
    else{
      if(this.xetsuco==1)
      {
        this.SinhvienService.findSinhvienKhoa(this.khoa).subscribe(data=>{
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })
      }
      else{
      this.sucoService.getAllSuco(this.khoa).subscribe(
        data=>{this.Sucos=data
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
        })
      }        
    }
  }
  onChangekhoa(khoa){
    if(this.xetsuco==1){
      this.SinhvienService.findSinhvienKhoa(this.khoa).subscribe(data=>{
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })
    }
    else{
      this.sucoService.getAllSuco(this.khoa).subscribe(
        data=>{this.Sucos=data
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
        })
    }
  }
  onChangeKham(suco){
    if(this.khoa==null){}
    else{
      if(this.xetsuco==1){
        this.SinhvienService.findSinhvienKhoa(this.khoa).subscribe(data=>{
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })
      }
      else{
        this.sucoService.getAllSuco(this.khoa).subscribe(
          data=>{this.Sucos=data
            this.dataSourceKham=new MatTableDataSource(data);
            this.dataSourceKham.paginator=this.paginator;
            this.dataSourceKham.sort=this.sort;
          })
      }
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilter1(filterValue: string) {
    this.dataSourceKham.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceKham.paginator) {
      this.dataSourceKham.paginator.firstPage();
    }
  }
  addSuco(data){
    localStorage.setItem('xetsuco',String(this.xetsuco));
    localStorage.setItem('xetkhoasuco',this.khoa);
    localStorage.removeItem('fsinhvien');
    localStorage.setItem('fsinhvien',JSON.stringify(data));
    this.router.navigate(['/yte/sucosuckhoe/add']);
  }
  updateSuco(data){
    localStorage.setItem('xetsuco',String(this.xetsuco));
    localStorage.setItem('xetkhoasuco',this.khoa);
    localStorage.removeItem('updateSuco');
    localStorage.setItem('updateSuco',JSON.stringify(data));
    this.router.navigate(['/yte/sucosuckhoe/update']);
  }
  deleteSuco(data:Sucop){
    localStorage.setItem('xetsuco',String(this.xetsuco));
    localStorage.setItem('xetkhoasuco',this.khoa);
    if(confirm("Xác Nhận Xóa"))
    {
    this.sucoService.deleteSuco(data.idsinhvien,data.ngay).subscribe(data=>{
      alert("Xóa Thành Công");
      this.sucoService.getAllSuco(this.khoa).subscribe(
        data=>{this.Sucos=data
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
        });
    })
    this.router.navigate(['/yte/sucosuckhoe']);
  }
  else{}
  }
}
