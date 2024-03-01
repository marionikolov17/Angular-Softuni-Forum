import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getThemes() {
    return this.http.get<Theme[]>(this.api + "/themes");
  }

  public getPosts(limit: number | undefined) {
    let url: string = this.api + "/posts";

    if (limit)
      url += `?limit=${limit}`;

    return this.http.get(url);
  }
}
