import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Account } from '../model/account.model';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { User } from '../model/user.model';
@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }
  baseUrl: string = 'http://localhost:8080/api/authenticate';
  Login(username:string,password:string):Observable<User>{  
  return this.http.post<User>(this.baseUrl,{username:username,passworld:password})
    .pipe(map(user=>{
        if(user&&user.token)
        {
          localStorage.setItem("currentUser",JSON.stringify(user));
        }
        return user;
    }));
}
  logout(){
    localStorage.removeItem('currentUser');
  }
}
