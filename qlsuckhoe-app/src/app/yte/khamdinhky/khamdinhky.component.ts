import { Component, OnInit, ViewChild } from '@angular/core';
import { HockiService } from 'src/app/service/hocki.service';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Khoa } from 'src/app/model/khoa.model';
import { Hocki } from 'src/app/model/hocki.model';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DinhkyService } from 'src/app/service/dinhky.service';
import { Dinhky2 } from 'src/app/model/dinhky2.model';

@Component({
  selector: 'app-khamdinhky',
  templateUrl: './khamdinhky.component.html',
  styleUrls: ['./khamdinhky.component.css']
})
export class KhamdinhkyComponent implements OnInit {

  constructor(private dinhkiService:DinhkyService,private route:Router,private hockiService:HockiService,private sinhvienService:SinhvienService) { }
  khoas:Khoa[];
  idhocki:string;
  idhocki1:number;
  khoa:string;
  xet:number=1;
  maten:string;
  hockis:Hocki[];
  chuyennganhs:Object;
  chuyennganh:string;
  sinhviens:Sinhvien[];
  displayedColumns: string[] = ['hoten','gioitinh','masv','diachi','chuyennganh','khoa','idsinhvien'];
  displayedColumnsKham:string[]=['hoten','masv','ngaykham','chieucao','cannang','bmi','ketluan','idkhamdinhky'];
  dataSource: MatTableDataSource<Sinhvien>;
  dataSourceKham:MatTableDataSource<Dinhky2>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    localStorage.removeItem('updateDinhky');
    this.khoa=localStorage.getItem('khoa')
    this.idhocki1=Number(localStorage.getItem('idhocki'));
    this.xet=Number(localStorage.getItem('xet'));
    this.chuyennganh=localStorage.getItem('chuyennganh');
    this.xet=this.xet==null?1:this.xet;
    if(this.idhocki1!=null&&this.khoa!=null&&this.chuyennganh!=null)
    {
      if(this.xet==1 || this.xet==null)
      {
        this.sinhvienService.findSvChuyennganh(this.khoa,this.chuyennganh).subscribe(data=>{
          this.sinhviens=data;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        });
      }
      else{
          this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
            this.dataSourceKham=new MatTableDataSource(data);
            this.dataSourceKham.paginator=this.paginator;
            this.dataSourceKham.sort=this.sort;
        });
      }
    }
    this.hockiService.getAllHocki().subscribe(data=>{
      this.hockis=data;
    });
    this.sinhvienService.findAllKhoa().subscribe(data=>{
        this.khoas=data;
    });
    this.sinhvienService.findAllChuyennganh().subscribe(data=>{
      this.chuyennganhs=data;
    });
  }
  onChangeChuyennganh(chuyennganh){
    if(this.khoa==null){}
    else{
      if(this.xet==1)
      {
        this.sinhvienService.findSvChuyennganh(this.khoa,this.chuyennganh).subscribe(data=>{
          this.sinhviens=data;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        });
      }
      else{
        this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
      });
      }
    }
  }
  onChangehk(idhocki){
    if(this.khoa==null || this.chuyennganh==null){
    }
    else{
      if(this.xet==1)
      {
        this.sinhvienService.findSvChuyennganh(this.khoa,this.chuyennganh).subscribe(data=>{
          this.sinhviens=data;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        });
      }
      else{
        this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
      });
      }
    }
  }
  onChangekhoa(khoa){
    if(this.idhocki1==null || this.chuyennganh==null){
    }
    else{
      if(this.xet==1)
      {
        this.sinhvienService.findSvChuyennganh(this.khoa,this.chuyennganh).subscribe(data=>{
          this.sinhviens=data;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        });
      }
      else{
        this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
      });
      }
    }
  }
  onChangeKham(check){
    if(check==1&&this.khoa!=null)
    {
      this.sinhvienService.findSvChuyennganh(this.khoa,this.chuyennganh).subscribe(data=>{
        this.sinhviens=data;
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      });
    }
    else if(check==2&&this.khoa!=null&&this.idhocki1!=null)
    {
      this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
      });
    }
  }
  search(){
    if(this.khoa==null || this.idhocki1==null)
    {
      alert("Chưa chọn học kì hoặc khóa");
    }
    else{
      this.sinhvienService.findSvchuakhamBymaten(this.idhocki1,this.khoa,this.maten).subscribe(data=>{
        if(data.length==0)
        {
          alert("Không tìm thấy");
        }
        else{
          this.sinhviens=data;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        }
      });
    }
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applyFilterKham(filterValue: string) {
    this.dataSourceKham.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceKham.paginator) {
      this.dataSourceKham.paginator.firstPage();
    }
  }
  khamDinhky(sinhvien:Sinhvien){
    this.idhocki=String(this.idhocki1);
    localStorage.removeItem('xet');
    localStorage.removeItem('sinhvien');
    localStorage.removeItem('idhocki');
    localStorage.removeItem('khoa');
    localStorage.setItem('xet',String(this.xet));
    localStorage.setItem('sinhvien',JSON.stringify(sinhvien));
    localStorage.setItem('idhocki',this.idhocki);
    localStorage.setItem('khoa',this.khoa);
    localStorage.setItem('chuyennganh',this.chuyennganh);
    this.route.navigate(['yte/khamdinhky/add']);
  }
  updateDinhky(dinhk){
    this.idhocki=String(this.idhocki1);
    localStorage.removeItem('xet');
    localStorage.removeItem('idhocki');
    localStorage.removeItem('khoa');
    localStorage.setItem('idhocki',this.idhocki);
    localStorage.setItem('khoa',this.khoa);
    localStorage.setItem('xet',String(this.xet));
    localStorage.setItem('chuyennganh',this.chuyennganh);
    localStorage.setItem('updateDinhky',JSON.stringify(dinhk));
    this.route.navigate(['yte/khamdinhky/update']);
  }
  deleteDinhky(data){
    if(confirm("Xác Nhận Xóa ?")){
      this.dinhkiService.deleteDinhky(data).subscribe(d=>{
        alert("Xóa Thành Công!");
        this.dinhkiService.findAllSinhvienByHocki(this.idhocki1,this.khoa,this.chuyennganh).subscribe(data=>{
          this.dataSourceKham=new MatTableDataSource(data);
          this.dataSourceKham.paginator=this.paginator;
          this.dataSourceKham.sort=this.sort;
      });
      })
    }
    else{
    }
  }
}
