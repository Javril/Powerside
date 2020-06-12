import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Register } from '../model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data: any = [];
  form: FormGroup;
  selected;
  statusList: any[] = [
    {id: 'present', name: 'Présent'},
    {id: 'absent', name: 'Absent'},
    {id: 'maybe', name: 'Peut-être'}
  ];

  constructor(private fb: FormBuilder, private register: RegisterService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      sellStatus: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });

    this.form.patchValue(this.form);
  }

  submit() {
    if (this.form.value) {
      console.log(this.form.value);
      const val = this.form.value;
      const submittedData: any = {
        firstname: val.firstname,
        name: val.name,
        status: val.sellStatus.name,
        gender: val.gender
      };
      this.data.push(submittedData);
      this.register.registerBS.next(this.data);
      this.reset();
    }

  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
  }

}
