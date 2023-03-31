import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IEmployee } from '../Models/Interfaces/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
baseAPIUrl:string=environment.baseAPIUrl;
  constructor(private _http:HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getAllEmployees(){
    const mode="Employees";
    return this._http.get(this.baseAPIUrl+mode, {headers:this.headers });
  }

  getEmployeeById(EmpId:string){
    const mode="Employees/"+EmpId;
    return this._http.get(this.baseAPIUrl+mode, {headers:this.headers });
    ;
  }

  AddEmployee(data:IEmployee){
    debugger;
    const mode="Employees";
    return this._http.post(this.baseAPIUrl+mode,data);
  }

  deleteEmployee(EmpId:string){
    const mode="Employees/"+EmpId;
    return this._http.delete(this.baseAPIUrl+mode, {headers:this.headers });
  }
  UpdateEmployee(data:IEmployee){
    debugger;
    const mode="Employees";
    return this._http.patch(this.baseAPIUrl+mode,data);
  }
}
