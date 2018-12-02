import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { DanhMuc } from "../model/danhmuc.model";
@Injectable()
export class YteService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
    };
    hockiUrl='http://localhost:8080/YTE/danhmuc';
    public getAllDanhmuc()
    {
       return this.http.get<DanhMuc[]>(this.hockiUrl+'/list',this.httpOptions)
    }
    
}