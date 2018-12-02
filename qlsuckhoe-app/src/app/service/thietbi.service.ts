import { Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Thietbi } from "../model/thietbi.model";
@Injectable()
export class ThietbiService{
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
    thietbiUrl='http://localhost:8080/YTE/thietbi';
    public findAllThietbi()
    {
       return this.http.get<Thietbi[]>(this.thietbiUrl+'/list',{
        headers: new HttpHeaders().set('Authorization','Bearer '+this.Userlogin.token)
    });
    }
    public deleteThietbi(iddanhmuc:number){
        return this.http.delete(this.thietbiUrl+'/'+iddanhmuc,this.httpOptions);
      }
    public addThietbi(thietbi:Thietbi){
        return this.http.post(this.thietbiUrl,thietbi,this.httpOptions);
    }
    public updateThietbi(idthietbi:number,thietbi:Thietbi){
        return this.http.put(this.thietbiUrl+'/'+idthietbi,thietbi,this.httpOptions1);
    }
}