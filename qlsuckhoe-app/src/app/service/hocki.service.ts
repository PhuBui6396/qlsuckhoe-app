import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Hocki } from "../model/hocki.model";
@Injectable()
export class HockiService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
  };
    hockiUrl='http://localhost:8080/ADMIN/hocki';
    public getAllHocki()
    {
       return this.http.get<Hocki[]>(this.hockiUrl+'/list',this.httpOptions);
    }
    public deleteHocki(idhocki:number)
    {
       return this.http.delete(this.hockiUrl+'/'+idhocki,this.httpOptions);
    }
    public addHocki(hocki:Hocki[]){
      return this.http.post(this.hockiUrl+'/list',hocki,this.httpOptions);
    }
    public putHocki(idhocki:number,hocki:Hocki){
      return this.http.put(this.hockiUrl+'/'+idhocki,hocki,this.httpOptions);
    }
}