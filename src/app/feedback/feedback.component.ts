import { Component, inject } from '@angular/core';

import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';



@Component({
  selector: 'app-feedback',
  imports: [MatFormFieldModule, MatDatepickerModule, MatCheckboxModule, MatRadioModule, MatInputModule, MatStepperModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers:
  [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
    provideNativeDateAdapter()
  ]
})


export class FeedbackComponent {

  private _formBuilder = inject(FormBuilder);

  readonly firstName = new FormControl('', [ Validators.required, Validators.minLength(3) ]);
  readonly lastName = new FormControl('', [ Validators.required, Validators.minLength(3) ]);
  readonly email = new FormControl('', [ Validators.required, Validators.email ]);
  readonly gender = new FormControl('', [ Validators.required ])

  readonly message = new FormControl('', [ Validators.required, Validators.minLength(10) ]);
  readonly dateofbirth = new FormControl('', [ Validators.required ]);

  readonly favcolor = new FormControl('');
  readonly notify = new FormControl('');

  basicFormGroup = this._formBuilder.group({
    firstname: this.firstName,
    lastname: this.lastName,
    email: this.email,
    gender: this.gender
  });
  moreFormGroup = this._formBuilder.group({
    message: this.message,
    dateofbirth: this.dateofbirth
  });
  optionalFormGroup = this._formBuilder.group({
    favcolor: this.favcolor,
    notify: this.notify,
  });

  getErrorMessage(controlName : string)
  {
    let control = this.basicFormGroup.get(controlName);
    if(control == null) control = this.moreFormGroup.get(controlName);
    if(control == null) return '';
    if (control.hasError('required')) {
      return 'This field must be filled!';
    } else if (control.hasError('email')) {
      return 'Not a valid email address!';
    }
    else if (control.hasError('minlength'))
    {
      return 'Value is not long enough!'
    } else {
      return '';
    }
  }

  hasInvalidMembers()
  {
    return this.basicFormGroup.invalid || this.moreFormGroup.invalid;
  }
}