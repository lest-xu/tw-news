import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListJpComponent } from './post-list-jp.component';

describe('PostListJpComponent', () => {
  let component: PostListJpComponent;
  let fixture: ComponentFixture<PostListJpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListJpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
