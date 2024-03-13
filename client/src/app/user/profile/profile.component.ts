import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public userService: UserService) {}

  get userDetails() {
    console.log(this.userService.user)
    return this.userService.user;
  }
}
