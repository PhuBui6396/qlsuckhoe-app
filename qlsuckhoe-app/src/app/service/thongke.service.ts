import { Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Countb1 } from "../model/countb1.model";
@Injectable()
export class ThongkeService{
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    constructor(private http:HttpClient){}
    loaithuocUrl='http://localhost:8080/YTE/dinhky/benh';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer '+this.Userlogin.token
        })
    };
    public thongkeBenh(idhocki:number){
        return this.http.get<Countb1>(this.loaithuocUrl+'?idhocki='+idhocki,this.httpOptions);
    }
}