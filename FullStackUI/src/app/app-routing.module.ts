import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path:"",
    component:EmployeeRegistrationComponent
  },
  {
    path:"EmployeeRegistration",
    component:EmployeeRegistrationComponent
  },
  {
    path:"EmployeeDetails",
    component:EmployeeDetailsComponent
  },
  {
    path:"EmployeeProfile/:EmpId",
    component:EmployeeProfileComponent
  },
  {
    path:"**",
    component:NoPageFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
