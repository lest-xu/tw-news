import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-post-list-card',
  templateUrl: './post-list-card.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.8s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.5)' }),
          stagger(100, [
            animate('0.8s', style({ opacity: 1 , transform: 'scale(1)'}))
          ])
        ], { optional: true })
      ])
    ])
  ],
  styleUrls: ['./post-list-card.component.css']
})
export class PostListCardComponent implements OnInit {

  p = 1;
  @Input() posts: any[];

  constructor() { }

  ngOnInit() {
  }

}
