import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from "./modules/user/user.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderFooterModule} from "./modules/user/header-footer/header-footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    HeaderFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
