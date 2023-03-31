import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../Models/Interfaces/employee';
import { EmployeesService } from '../Services/employees.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private _fb:FormBuilder, private _employee:EmployeesService, private _acRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._acRoute.queryParams.subscribe(data=>
      {
        if(data["EmpId"])
        {
          this.setEmployeeData(data["EmpId"])
        }
      })
  }

 
EmployeeForm=this._fb.group({
  id:['00000000-0000-0000-0000-000000000000'],
  name:[""],
  email:[""],
  phone:[""],
  dob:[""],
  doj:[""],
  gender:[""],
  salary:[""],
  department:[""],
  state:[""],
  city:[""],
  address:[""],
  isactive:[true],
  password:[""]
})
EmployeeData!:IEmployee;
SaveEmployeeData(){
  debugger;
  this.EmployeeData=this.EmployeeForm.value as IEmployee;
  if(this.EmployeeData.id!=="00000000-0000-0000-0000-000000000000")
  {
    this._employee.UpdateEmployee(this.EmployeeData).subscribe((data)=>{
      this._router.navigate(["EmployeeDetails"])
    })
  }
  else{
    this._employee.AddEmployee(this.EmployeeData).subscribe((data)=>{
      this._router.navigate(["EmployeeDetails"])
    })
  }
  this._router.navigate(["EmployeeDetails"])
  
  
}

setEmployeeData(EmpId:string){
  this._employee.getEmployeeById(EmpId).subscribe((data2)=>{
    debugger;
    const data=data2 as IEmployee;
    this.EmployeeForm.patchValue({
      id:data.id,
      name:data.name,
      email:data.email,
      phone:data.phone,
      dob:data.dob,
      doj:data.doj,
      gender:data.gender,
      salary:data.salary,
      department:data.department,
      state:data.state,
      city:data.city,
      address:data.address,
      password:data.password
    });
  });
}

}
