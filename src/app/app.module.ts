import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MdComponentsModule } from './shared/md-component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NavBarComponent } from './navs/nav-bar/nav-bar.component';
import { FooterComponent } from './navs/footer/footer.component';
import { PostListCnComponent } from './shared/post-list-cn/post-list-cn.component';
import { PostListEnComponent } from './shared/post-list-en/post-list-en.component';
import { PostServiceService } from './services/post-service.service';
import { environment } from '../environments/environment';
import { PostListCardComponent } from './shared/post-list-card/post-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCardComponent,
    NavBarComponent,
    FooterComponent,
    PostListCnComponent,
    PostListEnComponent,
    PostListCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MdComponentsModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: PostListComponent},
      { path: 'news', component: PostListComponent},
      { path: 'news/zh', component: PostListCnComponent},
      { path: 'news/en', component: PostListEnComponent},
    ])
  ],
  exports: [RouterModule],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
