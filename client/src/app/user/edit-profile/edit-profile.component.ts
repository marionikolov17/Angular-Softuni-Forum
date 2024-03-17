import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements AfterViewInit {
  @ViewChild('form') form: any;

  ngAfterViewInit(): void {
    console.log(this.form);
  }

  constructor(public userService: UserService) {}

  edit() {

  }
}
