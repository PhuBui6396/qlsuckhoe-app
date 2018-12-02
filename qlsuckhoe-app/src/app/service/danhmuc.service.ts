import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { DanhMuc } from "../model/danhmuc.model";
@Injectable()
export class DanhmucService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
    };
    danhmucUrl='http://localhost:8080/YTE/danhmuc';
    public getAllDanhmuc()
    {
       return this.http.get<DanhMuc[]>(this.danhmucUrl+'/list',this.httpOptions)
    }
    public deleteDanhmuc(iddanhmuc:number){
      return this.http.delete(this.danhmucUrl+'/'+iddanhmuc,this.httpOptions);
    }
    public addDanhmuc(danhmuc:DanhMuc[]){
      return this.http.post(this.danhmucUrl+'/list',danhmuc,this.httpOptions);
    }
    public putDanhmuc(iddanhmuc:number,danhmuc:DanhMuc)
    {
      return this.http.put(this.danhmucUrl+'/'+iddanhmuc,danhmuc,this.httpOptions);
    }
}