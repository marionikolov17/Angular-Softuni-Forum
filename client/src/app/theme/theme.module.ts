import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';

@NgModule({
  declarations: [
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
    NewThemeComponent
  ],
  imports: [
    CommonModule,
    ThemeRoutingModule,
    SharedModule
  ],
})

export class ThemesModule { }
