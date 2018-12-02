import { Thietbilist } from "./thietbilist.model";
import { Thuoclist } from "./thuoclist.model";

export class Suco{
    idsinhvien:number;
    hoten:string;
    masv:string;
    loaisuco:string;
    bienphap:string;
    ngay:string;
    mucdo:string;
    nguoixuly:string;
    thietbi:Thietbilist[];
    thuoc:Thuoclist[];
}