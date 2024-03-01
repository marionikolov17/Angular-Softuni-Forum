import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getThemes().subscribe((themes) => {
        console.log(themes);
      })
  }
}
