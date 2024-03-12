import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  public isLoading: boolean;
  themes: Theme[] = [];

  constructor(private apiService: ApiService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
      this.apiService.getThemes().subscribe((themes) => {
        console.log(themes);
        this.themes = themes;
        this.isLoading = false;
      });
  }
}
