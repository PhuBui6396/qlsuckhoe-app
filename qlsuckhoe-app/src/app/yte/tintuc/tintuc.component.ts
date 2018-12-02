import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Tintuc } from 'src/app/model/tintuc.model';
import { TintucService } from 'src/app/service/tintuc.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  displayedColumns: string[] = ['tieude','ngaydang','idtintuc'];
  checkLogin=true;
  dataSource: MatTableDataSource<Tintuc>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private tintucService:TintucService) { }
  ngOnInit() {
      this.tintucService.getAllTintuc().subscribe(data=>{
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
    this.route.navigate(['yte/tintuc/add']);
  }
  updateTintuc(tintuc:Tintuc){
    localStorage.removeItem('updateTintuc');
    localStorage.setItem('updateTintuc',JSON.stringify(tintuc));
    this.route.navigate(['yte/tintuc/update']);
  }
  deleteTintuc(idtintuc:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.tintucService.deleteDanhmuc(idtintuc).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }
}
