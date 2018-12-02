import {Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Benh } from "../model/benh.model";
@Injectable()
export class BenhService{
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
    hockiUrl='http://localhost:8080/YTE/benh';
    public getAllBenhByIddanhmuc(iddanhmuc:number)
    {
       return this.http.get<Benh[]>(this.hockiUrl+'/iddanhmuc/'+iddanhmuc,this.httpOptions)
    }
    public getAllBenh(){
      return this.http.get<Benh[]>(this.hockiUrl+'/list',this.httpOptions);
    }
    public deleteBenh(idbenh:number){
      return this.http.delete(this.hockiUrl+'/'+idbenh,this.httpOptions1);
    }
    public addBenh(benh:Benh) {
      return this.http.post(this.hockiUrl,benh,this.httpOptions1);
    }
    public updateBenh(idbenh:number,benh:Benh){
      return this.http.put(this.hockiUrl+'/'+idbenh,benh,this.httpOptions1);
    }
}