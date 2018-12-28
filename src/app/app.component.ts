
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'twitter-news';

  loading: boolean;
  posts: Post[] = [];
  subscription: Subscription;
  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.loading = true;
    this.subscription = this.postService
      .getAllPosts().subscribe(
        p => {
          this.posts = p;
          this.postService.setAllPosts(this.posts);

          this.loading = false;
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  goToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
