import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSetComponent } from './profil-set.component';

describe('ProfilSetComponent', () => {
  let component: ProfilSetComponent;
  let fixture: ComponentFixture<ProfilSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
