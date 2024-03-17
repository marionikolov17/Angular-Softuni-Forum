import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/passwords-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator()]],
    tel: [''],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator()],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  get passwords() {
    return this.registerForm.get('passwords');
  }

  register() {
    if (this.registerForm.invalid) {
      console.log('Register Form is invalid');
    } else {
      console.log('Register Form is valid');
    }
  }
}
