import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import { AuthenticationService } from '../service/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserLogin:User;
  i=1;
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  userName: string;
  checkLogin=true;
  passWord: string;
  constructor(private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute,private authService :AuthenticationService ) { }

  onSubmit() {
    this.submitted = true;
    this.userName=this.loginForm.controls.username.value;
    this.passWord=this.loginForm.controls.password.value;
    if(this.loginForm.invalid){
      return;
    }
    else
    {
      this.authService.Login(this.userName,this.passWord)
      .subscribe(data=>{
        if(data.role=="SINHVIEN")
        {
          this.checkLogin=true;
          this.UserLogin=data;
          document.body.classList.remove('login-img3-body');
          location.reload();
          this.router.navigate(['sinhvien']);
        }
        if(data.role=="ADMIN")
        {
          this.checkLogin=true;
          this.UserLogin=data;
          document.body.classList.remove('login-img3-body');
          location.reload();
          this.router.navigate(['quantri']);
        }
        if(data.role=="YTE")
        {
          this.checkLogin=true;
          localStorage.setItem('checkLogin',"2");
          this.UserLogin=data;
          document.body.classList.remove('login-img3-body');
          location.reload();
          this.router.navigate(['yte']);
        }
      },
      error=>{alert("Ten dang nhap hoac mat khau khong dung")}
      );
    }
  }
  ngOnInit() {
    this.authService.logout();
    localStorage.setItem('checkLogin',"1");
    document.body.classList.add('login-img3-body');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
}
