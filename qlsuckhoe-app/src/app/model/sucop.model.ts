import { Thuocsc } from "./thuocsc.model";
import { Thietbisc } from "./thietbisc.model";

export class Sucop{
    idsinhvien:number;
    loaisuco:string;
    mucdo:string;
    ngay:string;
    bienphap:string;
    nguoixuly:string;
    thuoc:Thuocsc[];
    thietbi:Thietbisc[];
}