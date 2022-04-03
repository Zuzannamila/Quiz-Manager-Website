import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenagerComponent } from './user-menager.component';

describe('UserMenagerComponent', () => {
  let component: UserMenagerComponent;
  let fixture: ComponentFixture<UserMenagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMenagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
