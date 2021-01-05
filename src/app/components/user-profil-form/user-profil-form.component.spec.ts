import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilFormComponent } from './user-profil-form.component';

describe('UserProfilFormComponent', () => {
  let component: UserProfilFormComponent;
  let fixture: ComponentFixture<UserProfilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
