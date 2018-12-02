import { Routes } from "@angular/router";
import {SidebarComponent} from '../sidebar/sidebar.component'
import {NavigationComponent} from '../navigation/navigation.component'
import {QlsinhvienComponent} from '../quantri/qlsinhvien/qlsinhvien.component'
import {HososvComponent} from '../yte/hososv/hososv.component'
import {ThongtinComponent} from '../sinhvien/thongtin/thongtin.component'
import {SucosuckhoeComponent} from '../yte/sucosuckhoe/sucosuckhoe.component'
import {AddSucoComponent} from '../yte/sucosuckhoe/add-suco/add-suco.component'
import {KhamdinhkyComponent} from '../yte/khamdinhky/khamdinhky.component'
import {AddDinhkyComponent} from '../yte/khamdinhky/add-dinhky/add-dinhky.component'
import {UpdateSinhvienComponent} from '../quantri/qlsinhvien/update-sinhvien/update-sinhvien.component'
import { QlyteComponent } from '../quantri/qlyte/qlyte.component';
import { QlhockiComponent } from '../quantri/qlhocki/qlhocki.component';
import { AddYteComponent } from '../quantri/qlyte/add-yte/add-yte.component';
import { UpdateYteComponent } from '../quantri/qlyte/update-yte/update-yte.component';
import { AddHockiComponent } from '../quantri/qlhocki/add-hocki/add-hocki.component';
import { UpdateHockiComponent } from '../quantri/qlhocki/update-hocki/update-hocki.component';
import { DanhmucComponent } from '../yte/danhmuc/danhmuc.component';
import { BenhComponent } from '../yte/benh/benh.component';
import { LoaithuocComponent } from '../yte/loaithuoc/loaithuoc.component';
import { ThuocComponent } from '../yte/thuoc/thuoc.component';
import { ThietbiyteComponent } from '../yte/thietbiyte/thietbiyte.component';
import { CongtyComponent } from '../yte/congty/congty.component';
import { AddDanhmucComponent } from '../yte/danhmuc/add-danhmuc/add-danhmuc.component';
import { UpdateDanhmucComponent } from '../yte/danhmuc/update-danhmuc/update-danhmuc.component';
import { AddCongtyComponent } from '../yte/congty/add-congty/add-congty.component';
import { UpdateCongtyComponent } from '../yte/congty/update-congty/update-congty.component';
import { AddLoaithuocComponent } from '../yte/loaithuoc/add-loaithuoc/add-loaithuoc.component';
import { UpdateLoaithuocComponent } from '../yte/loaithuoc/update-loaithuoc/update-loaithuoc.component';
import { AddThuocComponent } from '../yte/thuoc/add-thuoc/add-thuoc.component';
import { UpdateThuocComponent } from '../yte/thuoc/update-thuoc/update-thuoc.component';
import { UpdateThietbiyteComponent } from '../yte/thietbiyte/update-thietbiyte/update-thietbiyte.component';
import { AddThietbiyteComponent } from '../yte/thietbiyte/add-thietbiyte/add-thietbiyte.component';
import { AddBenhComponent } from '../yte/benh/add-benh/add-benh.component';
import { UpdateBenhComponent } from '../yte/benh/update-benh/update-benh.component';
import { UpdateDinhkyComponent } from '../yte/khamdinhky/update-dinhky/update-dinhky.component';
import { UpdateSucoComponent } from '../yte/sucosuckhoe/update-suco/update-suco.component';
import { ThongkeComponent } from '../yte/thongke/thongke.component';
import { TintucComponent } from '../yte/tintuc/tintuc.component';
import { AddTintucComponent } from '../yte/tintuc/add-tintuc/add-tintuc.component';
import { UpdateTintucComponent } from '../yte/tintuc/update-tintuc/update-tintuc.component';
import { TintucSVComponent } from '../sinhvien/tintuc/tintuc.component';
import { KhamdinhkySVComponent } from '../sinhvien/khamdinhky/khamdinhky.component';
import { SucosuckhoeSVComponent } from '../sinhvien/sucosuckhoe/sucosuckhoe.component';
import { LoginComponent } from "../login/login.component";
export const LayoutRouters: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {   path : 'sidebar', 
    component : SidebarComponent
},
{
    path : 'navative',
    component : NavigationComponent
},
{
    path : 'quantri',
    component : QlsinhvienComponent
},
{
    path : 'yte',
    component : HososvComponent
},
{
    path : 'sinhvien',
    component : ThongtinComponent
},
{
    path : 'sinhvien/tintuc',
    component : TintucSVComponent
},
{
    path : 'sinhvien/khamdinhky',
    component : KhamdinhkySVComponent
},
{
    path : 'sinhvien/sucosuckhoe',
    component : SucosuckhoeSVComponent
},
{
    path: 'yte/sucosuckhoe',
    component : SucosuckhoeComponent
},
{
    path: 'yte/sucosuckhoe/add',
    component : AddSucoComponent
},
{
    path: 'yte/sucosuckhoe/update',
    component : UpdateSucoComponent
},
{
    path: 'yte/khamdinhky',
    component : KhamdinhkyComponent
},
{
    path: 'yte/khamdinhky/add',
    component : AddDinhkyComponent
},
{
    path: 'yte/khamdinhky/update',
    component : UpdateDinhkyComponent
},
{
    path: 'quantri/sinhvien',
    component : UpdateSinhvienComponent
},
{
    path: 'quantri/yte',
    component : QlyteComponent
},
{
    path: 'quantri/yte/add',
    component : AddYteComponent
},
{
    path: 'quantri/yte/update',
    component : UpdateYteComponent
},
{
    path: 'quantri/hocki',
    component : QlhockiComponent
},
{
    path: 'quantri/hocki/add',
    component : AddHockiComponent
},
{
    path: 'quantri/hocki/update',
    component : UpdateHockiComponent
},
{
    path: 'yte/danhmuc',
    component : DanhmucComponent
},
{
    path: 'yte/danhmuc/add',
    component : AddDanhmucComponent
},
{
    path: 'yte/danhmuc/update',
    component : UpdateDanhmucComponent
},
{
    path: 'yte/benh',
    component : BenhComponent
},
{
    path: 'yte/benh/add',
    component : AddBenhComponent
},
{
    path: 'yte/benh/update',
    component : UpdateBenhComponent
},
{
    path: 'yte/loaithuoc',
    component : LoaithuocComponent
},
{
    path: 'yte/loaithuoc/add',
    component : AddLoaithuocComponent
},
{
    path: 'yte/loaithuoc/update',
    component : UpdateLoaithuocComponent
},
{
    path: 'yte/thuoc',
    component : ThuocComponent
},
{
    path: 'yte/thuoc/add',
    component : AddThuocComponent
},
{
    path: 'yte/thuoc/update',
    component : UpdateThuocComponent
},
{
    path: 'yte/thietbi',
    component : ThietbiyteComponent
},
{
    path: 'yte/thietbi/add',
    component : AddThietbiyteComponent
},
{
    path: 'yte/thietbi/update',
    component : UpdateThietbiyteComponent
},
{
    path: 'yte/congty',
    component : CongtyComponent
},
{
    path: 'yte/congty/add',
    component : AddCongtyComponent
},
{
    path: 'yte/congty/update',
    component : UpdateCongtyComponent
},
{
    path: 'yte/thongke',
    component : ThongkeComponent
},
{
    path:'yte/tintuc',
    component : TintucComponent
},
{
    path:'yte/tintuc/add',
    component : AddTintucComponent
},
{
    path:'yte/tintuc/update',
    component : UpdateTintucComponent
}
    ];