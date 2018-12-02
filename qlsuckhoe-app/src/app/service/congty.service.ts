import {Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Congty } from "../model/Congty.model";
@Injectable()
export class CongtyService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.Userlogin.token
    })
    };
    congtyUrl='http://localhost:8080/YTE/nhasanxuat';
    public getAllCongty()
    {
       return this.http.get<Congty[]>(this.congtyUrl+'/list',this.httpOptions)
    }
    public deleteCongty(idCongty:number){
      return this.http.delete(this.congtyUrl+'/'+idCongty,this.httpOptions);
    }
    public addCongty(Congty:Congty[]){
      return this.http.post(this.congtyUrl+'/list',Congty,this.httpOptions);
    }
    public putCongty(idCongty:number,Congty:Congty)
    {
      return this.http.put(this.congtyUrl+'/'+idCongty,Congty,this.httpOptions);
    }
}