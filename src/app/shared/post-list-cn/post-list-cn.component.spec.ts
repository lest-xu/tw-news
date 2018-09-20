import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListCnComponent } from './post-list-cn.component';

describe('PostListCnComponent', () => {
  let component: PostListCnComponent;
  let fixture: ComponentFixture<PostListCnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListCnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListCnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
