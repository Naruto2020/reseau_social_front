import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminPublicationsComponent } from './update-admin-publications.component';

describe('UpdateAdminPublicationsComponent', () => {
  let component: UpdateAdminPublicationsComponent;
  let fixture: ComponentFixture<UpdateAdminPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdminPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdminPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
