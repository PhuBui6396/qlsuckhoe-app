import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhMuc } from 'src/app/model/danhmuc.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { DanhmucService } from 'src/app/service/danhmuc.service';

@Component({
  selector: 'app-danhmuc',
  templateUrl: './danhmuc.component.html',
  styleUrls: ['./danhmuc.component.css']
})
export class DanhmucComponent implements OnInit {

  displayedColumns: string[] = ['tendanhmuc','iddanhmuc'];
  dataSource: MatTableDataSource<DanhMuc>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private danhmucService:DanhmucService) { }
  ngOnInit() {
      this.danhmucService.getAllDanhmuc().subscribe(data=>{
        this.dataSource=new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onAdd(){
    this.route.navigate(['yte/danhmuc/add']);
  }
  updateDanhmuc(danhmuc:DanhMuc){
    localStorage.removeItem('updateDanhmuc');
    localStorage.setItem('updateDanhmuc',JSON.stringify(danhmuc));
    this.route.navigate(['yte/danhmuc/update']);
  }
  deleteDanhmuc(iddanhmuc:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.danhmucService.deleteDanhmuc(iddanhmuc).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }
}
