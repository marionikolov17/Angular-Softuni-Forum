import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private USER_KEY = "user";
  public user: any;

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const currentUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(currentUser);
    } catch {
      this.user = undefined;
    }
  }

  private generateUser(): any {
    return {
      id: "5fa64c1f2183ce1728ff3723",
      username: "John"
    }
  }

  public login(): void {
    this.user = this.generateUser();
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  public logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }

}
