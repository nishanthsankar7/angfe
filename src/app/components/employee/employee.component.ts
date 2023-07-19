import { Component } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private http: ApiService) {


  }

  getEmployee() {
    this.http.getEmployee().subscribe(value => console.log(value));
  }
}
