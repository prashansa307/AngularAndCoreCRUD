import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeRegistrationComponent,
    NoPageFoundComponent,
    EmployeeDetailsComponent,
    EmployeeProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
