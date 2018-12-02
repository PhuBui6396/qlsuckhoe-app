import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Sinhvien } from 'src/app/model/sinhvien.model';
import { SinhvienService } from 'src/app/service/sinhvien.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(
    private sinhvienService:SinhvienService,
    public dialogRef: MatDialogRef<PasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sinhvien) {}
  passWord:string;
  passWordNew:string;
  passWordNew1:string;
  onNoClick(): void {
    this.dialogRef.close();
  }
  change(){
    if(this.passWord!=this.data.matkhau){alert("Mật khẩu cũ không chính xác!")}
    else{
      if(this.passWordNew!=this.passWordNew1){alert("Nhập lại mật khẩu không chính xác!");}
      else{
        this.sinhvienService.changePassword(this.data.idsinhvien,this.passWordNew).subscribe(d=>{
          alert("Đổi Mật Khẩu Thành Công");
          this.dialogRef.close();
        })
      }
    }
  }
  ngOnInit() {
  }

}
