
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'employee-detail',
  templateUrl: './detail.component.html'
})
export class EmployeeDetail implements OnInit {
  //ent: Employee = new Employee();
  selectedEmployee: Employee;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
     let id = params['id'];
   
    });
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

 /* gotoDetail(): void {
    this.router.navigate(['/detail:id', this.selectedEmployee.id]);
  } */
}
