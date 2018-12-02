import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Yte } from 'src/app/model/yte.model';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-qlyte',
  templateUrl: './qlyte.component.html',
  styleUrls: ['./qlyte.component.css']
})
export class QlyteComponent implements OnInit {
  displayedColumns: string[] = ['hoten', 'gioitinh', 'diachi','namsinh','sodt','chucvu','idyte'];
  dataSource: MatTableDataSource<Yte>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private route:Router,private _fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getAllDanhmuc().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onAdd(){
    this.route.navigate(['quantri/yte/add']);
  }
  updateYte(yte:Yte){
    localStorage.removeItem('updateYte');
    localStorage.setItem('updateYte',JSON.stringify(yte));
    this.route.navigate(['quantri/yte/update']);
  }
  deleteYte(idyte:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.adminService.deleteYte(idyte).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    });
    }else{}
  }
}
