import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { NotificationsLikeComponent } from './components/notifications-like/notifications-like.component';
import { NotificationsFollowComponent } from './components/notifications-follow/notifications-follow.component';
import { NotificationsCommentComponent } from './components/notifications-comment/notifications-comment.component';
import { NotificationsTagComponent } from './components/notifications-tag/notifications-tag.component';

const appRoutes: Routes = [
  { path: 'notifications', component: NotificationsComponent},
  {path: 'search', component: SearchComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    SearchComponent,
    NotificationsComponent,
    SearchItemComponent,
    NotificationsLikeComponent,
    NotificationsFollowComponent,
    NotificationsCommentComponent,
    NotificationsTagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
