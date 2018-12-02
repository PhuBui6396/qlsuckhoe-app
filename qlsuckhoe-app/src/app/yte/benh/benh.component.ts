import { Component, OnInit, ViewChild } from '@angular/core';
import { Benh } from 'src/app/model/benh.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { BenhService } from 'src/app/service/benh.service';

@Component({
  selector: 'app-benh',
  templateUrl: './benh.component.html',
  styleUrls: ['./benh.component.css']
})
export class BenhComponent implements OnInit {
  displayedColumns: string[] = ['tenbenh','danhmuc','trieuchung','cachchua','idbenh'];
  dataSource: MatTableDataSource<Benh>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private benhService:BenhService) { }
  ngOnInit() {
      this.benhService.getAllBenh().subscribe(data=>{
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
    this.route.navigate(['yte/benh/add']);
  }
  updateBenh(benh:Benh){
    localStorage.removeItem('updateBenh');
    localStorage.setItem('updateBenh',JSON.stringify(benh));
    this.route.navigate(['yte/benh/update']);
  }
  deleteBenh(idbenh:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.benhService.deleteBenh(idbenh).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }

}
