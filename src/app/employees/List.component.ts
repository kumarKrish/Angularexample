import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'employee-list',
  templateUrl: './List.component.html'
})
export class EmployeeList implements OnInit {

  emps = EMPLOYEES;
  selectedEmployee: Employee;
 
  constructor() { }

  ngOnInit() {
    console.log('Count :' + this.emps.length)
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  
}
