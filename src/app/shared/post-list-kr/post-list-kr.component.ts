import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-kr',
  templateUrl: './post-list-kr.component.html',
  styleUrls: ['./post-list-kr.component.css']
})
export class PostListKrComponent implements OnInit {

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .postSource.subscribe(p => {
        this.posts = p.filter(i => i.lang === 'kr');

        this.loading = false;
      });
  }

}
