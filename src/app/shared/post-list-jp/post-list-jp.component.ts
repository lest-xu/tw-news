import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-jp',
  templateUrl: './post-list-jp.component.html',
  styleUrls: ['./post-list-jp.component.css']
})
export class PostListJpComponent implements OnInit {

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .postSource.subscribe(p => {
        this.posts = p.filter(i => i.lang === 'jp');

        this.loading = false;
      });
  }

}
