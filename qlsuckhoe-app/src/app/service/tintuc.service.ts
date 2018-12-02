import {Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Tintuc } from "../model/tintuc.model";
@Injectable()
export class TintucService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
    };
    httpOptions1:Optional = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.Userlogin.token
      }),
      responseType:'text'
  };
    tintucUrl='http://localhost:8080/YTE/tintuc';
    public getAllTintuc()
    {
       return this.http.get<Tintuc[]>(this.tintucUrl+'/list',this.httpOptions)
    }
    public deleteDanhmuc(idtintuc:number){
      return this.http.delete(this.tintucUrl+'/'+idtintuc,this.httpOptions1);
    }
    public addDanhmuc(tintuc:Tintuc){
      return this.http.post(this.tintucUrl,tintuc,this.httpOptions1);
    }
    public putDanhmuc(idtintuc:number,tintuc:Tintuc)
    {
      return this.http.put(this.tintucUrl+'/'+idtintuc,tintuc,this.httpOptions1);
    }
}