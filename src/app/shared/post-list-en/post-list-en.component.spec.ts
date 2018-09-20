import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListEnComponent } from './post-list-en.component';

describe('PostListEnComponent', () => {
  let component: PostListEnComponent;
  let fixture: ComponentFixture<PostListEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
