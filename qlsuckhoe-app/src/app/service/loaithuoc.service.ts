import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Loaithuoc } from "../model/loaithuoc.model";
@Injectable()
export class LoaithuocService{
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    constructor(private http:HttpClient){}
    loaithuocUrl='http://localhost:8080/YTE/loaithuoc';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+this.Userlogin.token
        })
    };
    getAllloaithuoc()
    {
        return this.http.get<Loaithuoc[]>(this.loaithuocUrl+'/list',{
            headers: new HttpHeaders().set('Authorization','Bearer '+this.Userlogin.token)
        });
    }
    public deleteLoaithuoc(idLoaithuoc:number){
        return this.http.delete(this.loaithuocUrl+'/'+idLoaithuoc,this.httpOptions);
      }
      public addLoaithuoc(loaithuoc:Loaithuoc[]){
        return this.http.post(this.loaithuocUrl+'/list',loaithuoc,this.httpOptions);
      }
      public putLoaithuoc(idLoaithuoc:number,loaithuoc:Loaithuoc)
      {
        return this.http.put(this.loaithuocUrl+'/'+idLoaithuoc,loaithuoc,this.httpOptions);
      }
}