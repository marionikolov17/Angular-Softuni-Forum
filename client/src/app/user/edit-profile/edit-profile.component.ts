import { Component } from '@angular/core';
import { UserAuth, UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  constructor(public userService: UserService, private router: Router) {}

  edit(form: NgForm) {
    console.log(form.value);
    const newUser: UserAuth = {
      id: this.userService.user?.id || "",
      username: form.value.username,
      email: form.value.email,
      phone: form.value.tel
    }

    this.userService.updateUser(newUser);
    this.router.navigate(['/profile']);
  }
}
