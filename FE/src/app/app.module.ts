import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {UserModule} from "./modules/user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderFooterModule} from "./modules/user/header-footer/header-footer.module";
import {HomePageModule} from "./modules/user/home-page/home-page.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    HeaderFooterModule,
    HomePageModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
