import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee';
import { EMPLOYEE } from '../employee-mock';
@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = EMPLOYEE;
  selectedcustomer:Employee;
  employee: Employee = {
    id: 0, 
    name: '',
    email:'' ,
    phone:'',
    address:''
  };
  addEmployee()
  {
    
    if((this.employee.name.length==0)&&(this.employee.email.length==0))
    {alert("please fill the form")}
    else if((this.employee.name.length>0)&&(this.employee.email.length>0))
    {
      this.employee.id=this.employees.length+1;
      this.employees.push(this.employee);
      this.employee =  {
        id: 0, 
        name: '',
        email:'' ,
        phone:'',
        address:''
    
      };
    }
  }
constructor() { }

  ngOnInit() {
  }
  
}
