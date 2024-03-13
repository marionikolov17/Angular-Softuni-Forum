import { Injectable } from '@angular/core';

interface UserAuth {
  id: string;
  username: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USER_KEY = 'user';
  public user: UserAuth | undefined;

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

  public login(): void {
    this.user = {
      id: "5fa64b972183ce1728ff3720",
      username: "Ivan"
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  public logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
