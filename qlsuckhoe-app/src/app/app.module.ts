import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationService} from './service/auth.service'
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { QlsinhvienComponent } from './quantri/qlsinhvien/qlsinhvien.component';
import { HososvComponent} from './yte/hososv/hososv.component';
import { KhamdinhkyComponent } from './yte/khamdinhky/khamdinhky.component';
import { SucosuckhoeComponent } from './yte/sucosuckhoe/sucosuckhoe.component';
import { ThongtinComponent } from './sinhvien/thongtin/thongtin.component';
import {SucoService} from './service/suco.service';
import { AddSucoComponent } from './yte/sucosuckhoe/add-suco/add-suco.component';
import {SinhvienService} from './service/sinhvien.service';
import {LoaithuocService} from './service/loaithuoc.service';
import {ThuocService} from './service/thuoc.service';
import {ThietbiService} from './service/thietbi.service'
import { HockiService } from './service/hocki.service';
import { AddDinhkyComponent } from './yte/khamdinhky/add-dinhky/add-dinhky.component';
import { DanhmucService } from './service/danhmuc.service';
import { BenhService } from './service/benh.service';
import { DinhkyService } from './service/dinhky.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule,MatDialogModule,MatTabsModule,MatSelectModule,MatRadioModule,MatPaginatorModule,MatTableModule,MatButtonModule, MatCheckboxModule,MatNativeDateModule,MatInputModule,MatDatepickerModule,MatIconModule} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { UpdateSinhvienComponent } from './quantri/qlsinhvien/update-sinhvien/update-sinhvien.component';
import { QlyteComponent } from './quantri/qlyte/qlyte.component';
import { QlhockiComponent } from './quantri/qlhocki/qlhocki.component';
import { AdminService } from './service/admin.service';
import { AddYteComponent } from './quantri/qlyte/add-yte/add-yte.component';
import { UpdateYteComponent } from './quantri/qlyte/update-yte/update-yte.component';
import { AddHockiComponent } from './quantri/qlhocki/add-hocki/add-hocki.component';
import { UpdateHockiComponent } from './quantri/qlhocki/update-hocki/update-hocki.component';
import { DanhmucComponent } from './yte/danhmuc/danhmuc.component';
import { BenhComponent } from './yte/benh/benh.component';
import { CongtyComponent } from './yte/congty/congty.component';
import { LoaithuocComponent } from './yte/loaithuoc/loaithuoc.component';
import { ThuocComponent } from './yte/thuoc/thuoc.component';
import { ThietbiyteComponent } from './yte/thietbiyte/thietbiyte.component';
import { AddDanhmucComponent } from './yte/danhmuc/add-danhmuc/add-danhmuc.component';
import { UpdateDanhmucComponent } from './yte/danhmuc/update-danhmuc/update-danhmuc.component';
import { AddCongtyComponent } from './yte/congty/add-congty/add-congty.component';
import { UpdateCongtyComponent } from './yte/congty/update-congty/update-congty.component';
import { CongtyService } from './service/congty.service';
import { AddLoaithuocComponent } from './yte/loaithuoc/add-loaithuoc/add-loaithuoc.component';
import { UpdateLoaithuocComponent } from './yte/loaithuoc/update-loaithuoc/update-loaithuoc.component';
import { AddThietbiyteComponent } from './yte/thietbiyte/add-thietbiyte/add-thietbiyte.component';
import { UpdateThietbiyteComponent } from './yte/thietbiyte/update-thietbiyte/update-thietbiyte.component';
import { AddBenhComponent } from './yte/benh/add-benh/add-benh.component';
import { UpdateBenhComponent } from './yte/benh/update-benh/update-benh.component';
import { AddThuocComponent } from './yte/thuoc/add-thuoc/add-thuoc.component';
import { UpdateThuocComponent } from './yte/thuoc/update-thuoc/update-thuoc.component';
import { SucoComponent } from './yte/hososv/suco/suco.component';
import { DinhkyComponent } from './yte/hososv/dinhky/dinhky.component';
import { UpdateDinhkyComponent } from './yte/khamdinhky/update-dinhky/update-dinhky.component';
import {ChartsModule} from 'ng2-charts'
import { UpdateSucoComponent } from './yte/sucosuckhoe/update-suco/update-suco.component';
import { ThongkeComponent } from './yte/thongke/thongke.component';
import { ThongkeService } from './service/thongke.service';
import {CKEditorModule} from 'ng2-ckeditor';
import { TintucComponent } from './yte/tintuc/tintuc.component'
import { TintucService } from './service/tintuc.service';
import { AddTintucComponent } from './yte/tintuc/add-tintuc/add-tintuc.component';
import { UpdateTintucComponent } from './yte/tintuc/update-tintuc/update-tintuc.component';
import { UploadTintucComponent } from './yte/tintuc/add-tintuc/upload-tintuc/upload-tintuc.component';
import { TintucSVComponent } from './sinhvien/tintuc/tintuc.component';
import { SucosuckhoeSVComponent } from './sinhvien/sucosuckhoe/sucosuckhoe.component';
import { KhamdinhkySVComponent } from './sinhvien/khamdinhky/khamdinhky.component';
import { PasswordComponent } from './sinhvien/thongtin/password/password.component';
import { ViewtintucComponent } from './sinhvien/tintuc/viewtintuc/viewtintuc.component';
import { LayoutComponent } from './layout/layout.component';
import { SafeHtmlPipe } from './sinhvien/tintuc/viewtintuc/safe-html';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    NavigationComponent,
    QlsinhvienComponent,
    HososvComponent,
    KhamdinhkyComponent,
    SucosuckhoeComponent,
    ThongtinComponent,
    AddSucoComponent,
    AddDinhkyComponent,
    UpdateSinhvienComponent,
    QlyteComponent,
    QlhockiComponent,
    AddYteComponent,
    UpdateYteComponent,
    AddHockiComponent,
    UpdateHockiComponent,
    DanhmucComponent,
    BenhComponent,
    CongtyComponent,
    LoaithuocComponent,
    ThuocComponent,
    ThietbiyteComponent,
    AddDanhmucComponent,
    UpdateDanhmucComponent,
    AddCongtyComponent,
    UpdateCongtyComponent,
    AddLoaithuocComponent,
    UpdateLoaithuocComponent,
    AddThietbiyteComponent,
    UpdateThietbiyteComponent,
    AddBenhComponent,
    UpdateBenhComponent,
    AddThuocComponent,
    UpdateThuocComponent,
    SucoComponent,
    DinhkyComponent,
    UpdateDinhkyComponent,
    UpdateSucoComponent,
    ThongkeComponent,
    TintucComponent,
    AddTintucComponent,
    UpdateTintucComponent,
    UploadTintucComponent,
    TintucSVComponent,
    SucosuckhoeSVComponent,
    KhamdinhkySVComponent,
    PasswordComponent,
    ViewtintucComponent,
    LayoutComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    ChartsModule,
    CKEditorModule,
  ],
  entryComponents: [
    SucoComponent,
    DinhkyComponent,
    UploadTintucComponent,
    ViewtintucComponent,
    PasswordComponent
  ],
  providers: [TintucService,ThongkeService,CongtyService,LoaithuocService,AdminService,DinhkyService,BenhService,DanhmucService,HockiService,AuthenticationService,SucoService,SinhvienService,ThuocService,LoaithuocService,ThietbiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
