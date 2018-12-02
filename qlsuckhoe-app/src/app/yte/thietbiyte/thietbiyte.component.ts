import { Component, OnInit, ViewChild } from '@angular/core';
import { Thietbi } from 'src/app/model/thietbi.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ThietbiService } from 'src/app/service/thietbi.service';

@Component({
  selector: 'app-thietbiyte',
  templateUrl: './thietbiyte.component.html',
  styleUrls: ['./thietbiyte.component.css']
})
export class ThietbiyteComponent implements OnInit {

  displayedColumns: string[] = ['tenthietbi','nhasanxuat','ngaynhap','soluong','idthietbiyte'];
  dataSource: MatTableDataSource<Thietbi>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private thietbiService:ThietbiService) { }
  ngOnInit() {
      this.thietbiService.findAllThietbi().subscribe(data=>{
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
    this.route.navigate(['yte/thietbi/add']);
  }
  updateThietbi(Thietbi:Thietbi){
    localStorage.removeItem('updateThietbi');
    localStorage.setItem('updateThietbi',JSON.stringify(Thietbi));
    this.route.navigate(['yte/thietbi/update']);
  }
  deleteThietbi(idThietbi:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.thietbiService.deleteThietbi(idThietbi).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }

}
