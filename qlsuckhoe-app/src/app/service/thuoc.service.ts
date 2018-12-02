import { Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Thuoc } from "../model/thuoc.model";
@Injectable()
export class ThuocService{
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    constructor(private http:HttpClient){}
    loaithuocUrl='http://localhost:8080/YTE/thuoc';
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
    getAllthuocByidloaithuoc(idloaithuoc:number)
    {
        console.log(idloaithuoc);
       // alert(idloaithuoc);
        return this.http.get<Thuoc[]>(this.loaithuocUrl+'/loaithuoc?idloaithuoc='+idloaithuoc,{
            headers: new HttpHeaders().set('Authorization','Bearer '+this.Userlogin.token)
        });
    }
    getAllthuoc(){
        return this.http.get<Thuoc[]>(this.loaithuocUrl+'/list',this.httpOptions);
    }
    deleteThuoc(idthuoc:number){
        return this.http.delete(this.loaithuocUrl+'/'+idthuoc,this.httpOptions1);
    }
    updateThuoc(idthuoc:number,thuoc:Thuoc){
        return this.http.put(this.loaithuocUrl+'/'+idthuoc,thuoc,this.httpOptions1);
    }
    addThuoc(thuoc:Thuoc){
        return this.http.post(this.loaithuocUrl,thuoc,this.httpOptions1);
    }
}