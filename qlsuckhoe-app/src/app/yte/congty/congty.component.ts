import { Component, OnInit, ViewChild } from '@angular/core';
import { Congty } from 'src/app/model/congty.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { CongtyService } from 'src/app/service/congty.service';

@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.css']
})
export class CongtyComponent implements OnInit {
  displayedColumns: string[] = ['tennhasanxuat','idnhasanxuat'];
  dataSource: MatTableDataSource<Congty>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private congtyService:CongtyService) { }
  ngOnInit() {
      this.congtyService.getAllCongty().subscribe(data=>{
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
    this.route.navigate(['yte/congty/add']);
  }
  updateNhasanxuat(Congty:Congty){
    localStorage.removeItem('updateCongty');
    localStorage.setItem('updateCongty',JSON.stringify(Congty));
    this.route.navigate(['yte/congty/update']);
  }
  deleteNhasanxuat(idCongty:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.congtyService.deleteCongty(idCongty).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }
}
