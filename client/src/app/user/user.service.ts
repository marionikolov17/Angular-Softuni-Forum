import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public isLoggedIn: boolean = false;

  constructor() { }

  public login(): void {
    this.isLoggedIn = true;
  }

  public logout(): void {
    this.isLoggedIn = false;
  }

}
