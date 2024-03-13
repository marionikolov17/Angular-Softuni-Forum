import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit {
  theme = {} as Theme;
  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.activeRoute.params.subscribe(data => {
        const themeId = data["themeId"];

        this.apiService.getTheme(themeId).subscribe(theme => {
          console.log(theme);
          this.theme = theme;
        })
      })
  }
}
