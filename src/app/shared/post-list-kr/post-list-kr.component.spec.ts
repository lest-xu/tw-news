import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListKrComponent } from './post-list-kr.component';

describe('PostListKrComponent', () => {
  let component: PostListKrComponent;
  let fixture: ComponentFixture<PostListKrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListKrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListKrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
