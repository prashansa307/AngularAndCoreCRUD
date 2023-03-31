import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../Models/Interfaces/employee';
import { EmployeesService } from '../Services/employees.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private _employee: EmployeesService, private _router: Router) { }
  EmployeeDetails: IEmployee[] = [];
  public ngOnInit(): void {
    this.getAllEmployees();
    this.getAllEmployees();

  }

  DeleteEmployee(EmpId: string) {
    if (confirm("Do You Really Want To Delete This User?")) {
      this._employee.deleteEmployee(EmpId).subscribe((data:any) => {
        this.getAllEmployees();
      });
    }
  }
  getAllEmployees() {
    this._employee.getAllEmployees().subscribe((data:any) => {
      debugger
      this.EmployeeDetails = data as IEmployee[];
    });
  }
  getEmployeeById(EmpId: string) {
    this._router.navigate(['EmployeeRegistration'], { queryParams: { EmpId: EmpId } })
  }

}
