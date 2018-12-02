import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { Sinhvienp } from 'src/app/model/sinhvienp.model';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qlsinhvien',
  templateUrl: './qlsinhvien.component.html',
  styleUrls: ['./qlsinhvien.component.css']
})
export class QlsinhvienComponent implements OnInit {

  constructor(private route:Router,private sinhvienService:SinhvienService) { }
  arrayBuffer:any;
  sinhvien:Object[]=Array();
  sinhviens:Sinhvienp[]=[];
  selectedFile:File;
  check:boolean;
  sv:Sinhvien[];
  displayedColumns: string[] = ['hoten', 'masv', 'diachi','gioitinh','chuyennganh','khoa','idsinhvien'];
  dataSource: MatTableDataSource<Sinhvien>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    this.check=true;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.sinhvien=XLSX.utils.sheet_to_json(worksheet,{raw:true});
        this.sinhvien.forEach(data=>{
          if(!this.check){return;}
          let s = new Sinhvienp();
          Object.keys(data).forEach(d=>{
            if(d=='Họ và tên'){s.hoten=data[d];}
            else if(d=='Giới tính'){s.gioitinh=data[d];}
            else if(d=='Ngày tháng năm sinh'){s.namsinh=data[d];}
            else if(d=='Số chứng minh thư'){s.socmt='0'+data[d];}
            else if(d=='Địa chỉ'){s.diachi=data[d];}
            else if(d=='Chuyên ngành'){s.chuyennganh=data[d];}
            else if(d=='Khóa'){s.khoa=data[d];}
            else if(d=='Mã Sinh Viên'){s.masv=data[d];}
            else{}
          });
          if(Object.values(s).length==0)
          {
            alert("Chọn sai file");
            this.check=false;
          }
          else{
            if(Object.values(s).length==8)
            {
              this.sinhviens.push(s);
            }
            else{
              alert("Chưa nhập đủ thông tin");
              this.check=false;
            }
          }
        });
        if(this.check)
        {
          this.sinhvienService.addListSinhvien(this.sinhviens).subscribe(data=>{
            alert("Thêm mới thành công");
            location.reload();
          });
        }
        else{}
    };
    fileReader.readAsArrayBuffer(this.selectedFile);
  }
  ngOnInit() {
    
    this.sinhvienService.findAllsv().subscribe(data=>{
      this.sv=data;
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
  deleteSinhvien(idsinhvien){
    if(confirm("Xác nhận xóa ?")){
      this.sinhvienService.deleteSinhvien(idsinhvien).subscribe(data=>{
        alert("Xóa thành công");
        location.reload();
      });
    }
    else{}
  }
  updateSinhvien(sinhvien){
    localStorage.removeItem('putSinhvien');
    localStorage.setItem('putSinhvien',JSON.stringify(sinhvien));
    this.route.navigate(['quantri/sinhvien']);
  }
}
