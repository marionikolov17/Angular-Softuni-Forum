import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    ThemesListComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    ThemesListComponent,
    PostsListComponent
  ],
})

export class ThemesModule { }
