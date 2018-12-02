import {Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Suco } from "../model/suco.model";
import { Sucop } from "../model/sucop.model";
@Injectable()
export class SucoService{
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
    sucoUrl='http://localhost:8080/YTE/sucosuckhoe';
    public getAllSuco(khoa:string)
    {
       return this.http.get<Suco[]>(this.sucoUrl+'/list?khoa='+khoa,this.httpOptions)
    }
    public addSuco(sucop:Sucop){
        return this.http.post('http://localhost:8080/YTE/sucosuckhoe',sucop,this.httpOptions)
    }
    public findByidsinhvien(idsinhvien:number){
      return this.http.get<Suco[]>(this.sucoUrl+'/findidsv?idsinhvien='+idsinhvien,this.httpOptions);
    }
    public findByNgay(idsinhvien:number,ngay:string){
      return this.http.get(this.sucoUrl+'/findsv?idsinhvien='+idsinhvien+'&ngay='+ngay,this.httpOptions);
    }
    public deleteSuco(idsinhvien:number,ngay:string){
      return this.http.delete(this.sucoUrl+'/delete?idsinhvien='+idsinhvien+'&ngay='+ngay,this.httpOptions1);
    }
    public updateSuco(idsinhvien:number,ngay:string,sucop:Sucop){
      return this.http.put('http://localhost:8080/YTE/sucosuckhoe/update?idsinhvien='+idsinhvien+'&ngay='+ngay,sucop,this.httpOptions1)
    }
}