import {Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Dinhky } from "../model/dinhky.model";
import { Dinhky1 } from "../model/dinhky1.model";
import { Dinhky2 } from "../model/dinhky2.model";
import { ChisoBMI } from "../model/chisobmi.model";
@Injectable()
export class DinhkyService{
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
    hockiUrl='http://localhost:8080/YTE/dinhky';
    public addDinhky(dinhky:Dinhky)
    {
       return this.http.post(this.hockiUrl,dinhky,this.httpOptions);
    }
    public findkq(idsinhvien:number)
    {
      return this.http.get<Dinhky1>(this.hockiUrl+'/findsv/'+idsinhvien,this.httpOptions);
    }

    public findKetquaDinhky(idsinhvien:number,idhocki:number) {
      return this.http.get<Dinhky1[]>(this.hockiUrl+'/findsv?idsinhvien='+idsinhvien+'&idhocki='+idhocki,this.httpOptions);
    }
    public findAllSinhvienByHocki(idhocki:number,khoa:String,chuyennganh:string) {
      return this.http.get<Dinhky2[]>(this.hockiUrl+'/findsvby?idhocki='+idhocki+'&khoa='+khoa+'&chuyennganh='+chuyennganh,this.httpOptions);
    }
    public updateDinhky(dinhky:Dinhky2){
      return this.http.put(this.hockiUrl+'/update',dinhky,this.httpOptions1);
    }
    public deleteDinhky(dinhky:Dinhky2){
      return this.http.put(this.hockiUrl+'/delete',dinhky,this.httpOptions1);
    }
    public chisoBMI(idhocki:number)
    {
      return this.http.get<ChisoBMI>(this.hockiUrl+'/chiso?idhocki='+idhocki,this.httpOptions);
    }
}