import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public isLoggedIn: boolean = false;
  public user: any;

  constructor() { }

  private generateUser(): any {
    return {
      id: "5fa64c1f2183ce1728ff3723",
      username: "John"
    }
  }

  public login(): void {
    this.isLoggedIn = true;
    this.user = this.generateUser();
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.user = {};
  }

}
