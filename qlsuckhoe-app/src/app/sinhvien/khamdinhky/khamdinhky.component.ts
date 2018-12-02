import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Dinhky1 } from 'src/app/model/dinhky1.model';
import { Dinhky2 } from 'src/app/model/dinhky2.model';
import { Hocki } from 'src/app/model/hocki.model';
import { DinhkyService } from 'src/app/service/dinhky.service';
import { User } from 'src/app/model/user.model';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { HockiService } from 'src/app/service/hocki.service';
import { SucoComponent } from 'src/app/yte/hososv/suco/suco.component';

@Component({
  selector: 'app-khamdinhky',
  templateUrl: './khamdinhky.component.html',
  styleUrls: ['./khamdinhky.component.css']
})
export class KhamdinhkySVComponent implements OnInit {

  constructor(private dialog:MatDialog,private hockiService:HockiService,private dinhkyService:DinhkyService,private sinhvienService:SinhvienService) { }
  displayedColumnsDinhki: string[] = ['hoten', 'masv', 'ngaykham','chieucao','cannang','ketluan','ketqua'];
  dataSourceDinhki:MatTableDataSource<Dinhky1>;
  dinhky:Dinhky1;
  dinhkyView:Dinhky2;
  hockis:Hocki[];
  idhocki:number;
  khoas:Object;
  khoa:string;
  sv:Sinhvien;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    let Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    this.sinhvienService.findSinhvienId(Userlogin.iduser).subscribe(data=>{
      this.sv=data;
    });
    this.hockiService.getAllHocki().subscribe(data=>{
      this.hockis=data;
    });
  }
  onChangeHocki(idhocki){
    this.dinhkyService.findKetquaDinhky(this.sv.idsinhvien,idhocki).subscribe(data=>{
      this.dataSourceDinhki= new MatTableDataSource(data);
      this.dataSourceDinhki.paginator=this.paginator;
    });
  }
  viewKetqua(dinhky:Dinhky2)
  {
    this.dinhkyView=dinhky;
    let dialogRef = this.dialog.open(SucoComponent, {
      width: '700px',
      data: this.dinhkyView
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
