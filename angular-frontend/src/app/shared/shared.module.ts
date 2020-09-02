import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

import {MaterialModule} from "./materialUI/material.module";

import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";
import { RupiahPipe } from './pipes/rupiah.pipe';

@NgModule({
  declarations: [NavbarComponent,FooterComponent,SidenavComponent,HomeComponent, RupiahPipe],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
    exports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        NavbarComponent,
        FooterComponent,
        SidenavComponent,
        HomeComponent,
        RupiahPipe
    ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
