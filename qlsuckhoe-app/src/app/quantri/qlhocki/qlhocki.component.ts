import { Component, OnInit, ViewChild } from '@angular/core';
import { Hocki } from 'src/app/model/hocki.model';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HockiService } from 'src/app/service/hocki.service';

@Component({
  selector: 'app-qlhocki',
  templateUrl: './qlhocki.component.html',
  styleUrls: ['./qlhocki.component.css']
})
export class QlhockiComponent implements OnInit {

  displayedColumns: string[] = ['tenhocki','idhocki'];
  dataSource: MatTableDataSource<Hocki>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route:Router,private _fb:FormBuilder,private hockiService:HockiService) { }
  ngOnInit() {
      this.hockiService.getAllHocki().subscribe(data=>{
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
    this.route.navigate(['quantri/hocki/add']);
  }
  updateHocki(hk:Hocki){
    localStorage.removeItem('updateHocki');
    localStorage.setItem('updateHocki',JSON.stringify(hk));
    this.route.navigate(['quantri/hocki/update']);
  }
  deleteHocki(idhocki:number){
    if(confirm("Xác Nhận Xóa ?")){
      this.hockiService.deleteHocki(idhocki).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
    },er=>{
      alert("Không thể xóa");
    });
    }else{}
  }
}
