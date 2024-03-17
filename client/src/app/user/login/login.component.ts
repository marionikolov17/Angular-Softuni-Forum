import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}

  login() {
    if (this.loginForm.invalid) {
      console.log("Form is invalid");
      return;
    }

    this.userService.login();
    this.router.navigate(['/home']);
  }
}

