import { Injectable, Optional } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from "../model/user.model";
import { Sinhvien } from "../model/sinhvien.model";
import { Khoa } from "../model/khoa.model";
import { Sinhvienp } from "../model/sinhvienp.model";
import { Sinhviens } from "../model/sinhviens.model";
@Injectable()
export class SinhvienService{
    constructor(private http:HttpClient){}
    Userlogin:User=JSON.parse(localStorage.getItem('currentUser'));
    sinhvienUrl='http://localhost:8080/YTE/sinhvien';
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
    public findSinhvien(masv:string)
    {
       return this.http.get<Sinhvien>(this.sinhvienUrl+'/findsv?maten='+masv,this.httpOptions);
    }
    public findSinhvienId(idsinhvien:number)
    {
       return this.http.get<Sinhvien>(this.sinhvienUrl+'/'+idsinhvien,this.httpOptions);
    }
    public changePassword(idsinhvien:number,password:string)
    {
       return this.http.put(this.sinhvienUrl+'/change/'+idsinhvien,password,this.httpOptions1);
    }
    public findSinhvienKhoa(khoa:string)
    {
        return this.http.get<Sinhvien[]>(this.sinhvienUrl+'/khoasv?khoa='+khoa,this.httpOptions);
    }
    public findAllsv()
    {
       return this.http.get<Sinhvien[]>(this.sinhvienUrl+'/list',this.httpOptions)
    }
    public findAllKhoa(){
        return this.http.get<Khoa[]>(this.sinhvienUrl+'/khoa',this.httpOptions)
    }
    public findSvchuakham(idhocki:number,khoa:string){
        return this.http.get<Sinhvien[]>(this.sinhvienUrl+'/findsvdk?idhocki='+idhocki+'&khoa='+khoa,{
            headers: new HttpHeaders().set('Authorization','Bearer '+this.Userlogin.token)
        })
    }
    public findSvchuakhamBymaten(idhocki:number,khoa:string,maten:string){
        return this.http.get<Sinhvien[]>(this.sinhvienUrl+'/findmasv?idhocki='+idhocki+'&khoa='+khoa+'&maten='+maten,{
            headers: new HttpHeaders().set('Authorization','Bearer '+this.Userlogin.token)
        })
    }
    public addListSinhvien(listsv:Sinhvienp[]){
        return this.http.post(this.sinhvienUrl,listsv,this.httpOptions);
    }
    public putSinhvien(idsinhvien:number,sinhvien:Sinhviens){
        return this.http.put(this.sinhvienUrl+'/'+idsinhvien,sinhvien,this.httpOptions);
    }
    public deleteSinhvien(idsinhvien:number){
        return this.http.delete(this.sinhvienUrl+'/'+idsinhvien,this.httpOptions);
    }
    public findAllChuyennganh(){
        return this.http.get(this.sinhvienUrl+'/chuyennganh',this.httpOptions);
    }
    public findSvChuyennganh(khoa:string,chuyennganh:string){
        return this.http.get<Sinhvien[]>(this.sinhvienUrl+'/findcn?khoa='+khoa+'&chuyennganh='+chuyennganh,this.httpOptions);
    }
}