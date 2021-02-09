import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLikesCommentsComponent } from './user-likes-comments.component';

describe('UserLikesCommentsComponent', () => {
  let component: UserLikesCommentsComponent;
  let fixture: ComponentFixture<UserLikesCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLikesCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLikesCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
