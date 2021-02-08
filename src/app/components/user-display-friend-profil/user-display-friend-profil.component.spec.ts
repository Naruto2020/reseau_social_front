import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayFriendProfilComponent } from './user-display-friend-profil.component';

describe('UserDisplayFriendProfilComponent', () => {
  let component: UserDisplayFriendProfilComponent;
  let fixture: ComponentFixture<UserDisplayFriendProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDisplayFriendProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayFriendProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
