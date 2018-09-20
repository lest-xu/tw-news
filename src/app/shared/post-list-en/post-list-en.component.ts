import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post-list-en',
  templateUrl: './post-list-en.component.html',
  styleUrls: ['./post-list-en.component.css']
})
export class PostListEnComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;
  constructor(private route: ActivatedRoute,
    private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .postSource.subscribe(p => {
        this.posts = p.filter(i => i.lang === 'en');
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
