import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AuthGuard} from "./shared/guards/auth.guard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from "./shared/material/material.module";
import {FlexModule} from "@angular/flex-layout";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
