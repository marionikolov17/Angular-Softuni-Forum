import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
      this.activeRoute.params.subscribe(data => {
        const themeId = data["themeId"];

        this.apiService.getTheme(themeId).subscribe(theme => {
          console.log(theme);
          this.theme = theme;
        })
      })
  }

  get isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

  isSubscribed() {
    const isSub = this.theme.subscribers.find(s => s === this.userService.user?.id);

    return !!isSub;
  }
}
