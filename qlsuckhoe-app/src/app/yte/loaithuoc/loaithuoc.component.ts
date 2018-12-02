import { Component, OnInit, ViewChild } from '@angular/core';
import { Loaithuoc } from 'src/app/model/loaithuoc.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { LoaithuocService } from 'src/app/service/loaithuoc.service';

@Component({
  selector: 'app-loaithuoc',
  templateUrl: './loaithuoc.component.html',
  styleUrls: ['./loaithuoc.component.css']
})
export class LoaithuocComponent implements OnInit {
  displayedColumns: string[] = ['tenloai','idloaithuoc'];
  dataSource: MatTableDataSource<Loaithuoc>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private LoaithuocService:LoaithuocService) { }
  ngOnInit() {
      this.LoaithuocService.getAllloaithuoc().subscribe(data=>{
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
    this.route.navigate(['yte/loaithuoc/add']);
  }
  updateLoaithuoc(Loaithuoc:Loaithuoc){
    localStorage.removeItem('updateLoaithuoc');
    localStorage.setItem('updateLoaithuoc',JSON.stringify(Loaithuoc));
    this.route.navigate(['yte/loaithuoc/update']);
  }
  deleteLoaithuoc(idLoaithuoc:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.LoaithuocService.deleteLoaithuoc(idLoaithuoc).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }

}
