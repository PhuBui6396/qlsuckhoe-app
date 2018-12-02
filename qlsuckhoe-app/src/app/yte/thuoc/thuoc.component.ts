import { Component, OnInit, ViewChild } from '@angular/core';
import { Thuoc } from 'src/app/model/thuoc.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ThuocService } from 'src/app/service/thuoc.service';
import { Router } from '@angular/router';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';
import { CongtyService } from 'src/app/service/congty.service';

@Component({
  selector: 'app-thuoc',
  templateUrl: './thuoc.component.html',
  styleUrls: ['./thuoc.component.css']
})
export class ThuocComponent implements OnInit {

  displayedColumns: string[] = ['tenthuoc','loaithuoc','nhasanxuat','ngaynhap','soluong','idthuoc'];
  dataSource: MatTableDataSource<Thuoc>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private ThuocService:ThuocService,private loaithuocService:LoaithuocService,private congtyService:CongtyService) { }
  ngOnInit() {
      this.ThuocService.getAllthuoc().subscribe(data=>{
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
    this.route.navigate(['yte/thuoc/add']);
  }
  updateThuoc(Thuoc:Thuoc){
    localStorage.removeItem('updateThuoc');
    localStorage.setItem('updateThuoc',JSON.stringify(Thuoc));
    this.route.navigate(['yte/thuoc/update']);
  }
  deleteThuoc(idThuoc:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.ThuocService.deleteThuoc(idThuoc).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }
}
