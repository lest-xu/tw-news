import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import 'rxjs';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  media_url_https: any;

  @Input() post: any;

  constructor() { }

  ngOnInit() {
    this.media_url_https = this.post.entities && this.post.entities['media'] ? this.post.entities['media'][0].media_url_https : '';
  }

}
