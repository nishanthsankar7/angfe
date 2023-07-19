import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  ClientForm!: FormGroup;

  constructor(public form: FormBuilder,) {
   
  }

  ngOnInit() {
    this.buildForm();
  }
  onSubmit() {
    console.log(this.ClientForm.value)
  }
  public buildForm() {
    this.ClientForm = this.form.group({
      name: '',
      age: 0,
    });

  }
}
