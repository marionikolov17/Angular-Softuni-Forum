import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  public isLoading: boolean;
  themes: Theme[] = [];

  constructor(private apiService: ApiService, private userService: UserService) {
    this.isLoading = true;
  }

  get id(): string {
    return this.userService.user?.id || "";
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  isSubscribed(theme: Theme) {
    const isUserSubscribed = theme.subscribers.find(s => {
      return s === this.userService.user?.id
    });

    return !!isUserSubscribed;
  }

  ngOnInit(): void {
      this.apiService.getThemes().subscribe((themes) => {
        console.log(themes);
        this.themes = themes;
        this.isLoading = false;
      });
  }
}
