import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublicationsComponent } from './update-publications.component';

describe('UpdatePublicationsComponent', () => {
  let component: UpdatePublicationsComponent;
  let fixture: ComponentFixture<UpdatePublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
