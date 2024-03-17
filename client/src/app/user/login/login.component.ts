import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}

  login() {
    //e.preventDefault();
    /* this.userService.login();
    this.router.navigate(["/home"]); */
  }
}
