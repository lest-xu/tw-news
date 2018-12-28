import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-card-plain',
  templateUrl: './post-card-plain.component.html',
  styleUrls: ['./post-card-plain.component.css']
})
export class PostCardPlainComponent implements OnInit {

  media_url_https: any;

  @Input() post: any;

  constructor() { }

  ngOnInit() {
    this.media_url_https = this.post.entities && this.post.entities['media'] ? this.post.entities['media'][0].media_url_https : '';
  }

}
