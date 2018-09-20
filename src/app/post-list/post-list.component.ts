import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { PostServiceService } from './../services/post-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .postSource.subscribe(
        p => {
          this.posts = p;

          this.loading = false;
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
