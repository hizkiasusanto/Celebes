import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {MaterialModule} from "./materialUI/material.module";

import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {HomeComponent} from "./components/home/home.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";
import {RupiahPipe} from './pipes/rupiah.pipe';
import {LoadingComponent} from './components/loading/loading.component';
import {LoadingDirective} from './directives/loading.directive';
import {ApprovalRequiredComponent} from './components/approval-required/approval-required.component';
import {UnauthorizedComponent} from './components/unauthorized/unauthorized.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    RupiahPipe,
    LoadingComponent,
    LoadingDirective,
    ApprovalRequiredComponent,
    UnauthorizedComponent,
    PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ChartsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    RupiahPipe,
    LoadingDirective
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500, horizontalPosition: "end"}}
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
