import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Yte } from "../model/yte.model";
import { Ytep } from "../model/ytep.model";
@Injectable()
export class AdminService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
    };
    yteUrl='http://localhost:8080/ADMIN/yte';
    public getAllDanhmuc()
    {
       return this.http.get<Yte[]>(this.yteUrl+'/list',this.httpOptions);
    }
    public addYte(yte:Ytep)
    {
       return this.http.post(this.yteUrl,yte,this.httpOptions);
    }
    public deleteYte(idyte:number){
      return this.http.delete(this.yteUrl+'/'+idyte,this.httpOptions);
    }
    public putYte(idyte:number,yte:Ytep){
      return this.http.put(this.yteUrl+'/'+idyte,yte,this.httpOptions);
    }
}