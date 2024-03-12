import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public isLoading: boolean;
  posts: Post[] = []

  constructor(private apiService: ApiService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
      this.apiService.getPosts(5).subscribe((posts) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
      });
  }
}
