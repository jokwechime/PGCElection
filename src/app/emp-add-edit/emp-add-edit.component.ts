import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

empForm: FormGroup;

  education: string[] = [
    'Matric',
    'Intermediate',
    'Diploma',
    'Undergraduate',
    'Post Graduate'

  ];

  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: DialogRef<EmpAddEditComponent>) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      address: '',

    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee successfully added')
          this._dialogRef.close()

        },
        error: (err: any) => {
          console.error(err);
        }


      })
      console.log(this.empForm.value)
    }
  }

}
