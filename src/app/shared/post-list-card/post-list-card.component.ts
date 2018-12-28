import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-post-list-card',
  templateUrl: './post-list-card.component.html',
  // animations: [
  //   trigger('listAnimation', [
  //     transition('* => *', [ // each time the binding value changes
  //       query(':leave', [
  //         stagger(100, [
  //           animate('0.8s', style({ opacity: 0 }))
  //         ])
  //       ], { optional: true }),
  //       query(':enter', [
  //         style({ opacity: 0, transform: 'scale(0.5)' }),
  //         stagger(100, [
  //           animate('0.8s', style({ opacity: 1 , transform: 'scale(1)'}))
  //         ])
  //       ], { optional: true })
  //     ])
  //   ])
  // ],
  styleUrls: ['./post-list-card.component.css']
})
export class PostListCardComponent implements OnInit {

  p = 1;
  lang: string;
  @Input() posts: any[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '250px',
      data: { lang: this.lang }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.lang = result;
    });
  }

}
