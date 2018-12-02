import { Loaithuoc } from "./loaithuoc.model";
import { Nhasanxuat } from "./nhasanxuat.model";

export class Thuoc{
    idthuoc:number;
    loaithuoc:Loaithuoc;
    nhasanxuat:Nhasanxuat;
    tenthuoc:string;
    tacdung:string;
    cachdung:string;
    ngaynhap:string;
    soluong:number;
}