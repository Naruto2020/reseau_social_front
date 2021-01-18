import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotifComponent } from './user-notif.component';

describe('UserNotifComponent', () => {
  let component: UserNotifComponent;
  let fixture: ComponentFixture<UserNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
