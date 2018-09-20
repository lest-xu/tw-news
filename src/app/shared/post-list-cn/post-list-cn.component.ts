import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';


@Component({
  selector: 'app-post-list-cn',
  templateUrl: './post-list-cn.component.html',
  styleUrls: ['./post-list-cn.component.css']
})
export class PostListCnComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;
  constructor(private route: ActivatedRoute,
    private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .postSource.subscribe(p => {
        this.posts = p.filter(i => i.lang === 'zh');

        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

