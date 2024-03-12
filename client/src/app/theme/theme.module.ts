import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    ThemesListComponent,
    PostsListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
  ],
})

export class ThemesModule { }
