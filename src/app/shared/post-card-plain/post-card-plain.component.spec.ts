import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardPlainComponent } from './post-card-plain.component';

describe('PostCardPlainComponent', () => {
  let component: PostCardPlainComponent;
  let fixture: ComponentFixture<PostCardPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCardPlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
