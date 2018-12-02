import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Tintuc } from 'src/app/model/tintuc.model';
import { TintucService } from 'src/app/service/tintuc.service';
import { ViewtintucComponent } from './viewtintuc/viewtintuc.component';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucSVComponent implements OnInit {

  displayedColumns: string[] = ['tieude','ngaydang','idtintuc'];
  dataSource: MatTableDataSource<Tintuc>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog:MatDialog,private tintucService:TintucService) { }
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
  viewTintuc(tintuc){
    let dialogRef = this.dialog.open(ViewtintucComponent, {
      width: '1200px',
      height:'550px',
      data: tintuc
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
