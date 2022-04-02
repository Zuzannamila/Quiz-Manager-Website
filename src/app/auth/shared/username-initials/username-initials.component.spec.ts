import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameInitialsComponent } from './username-initials.component';

describe('UsernameInitialsComponent', () => {
  let component: UsernameInitialsComponent;
  let fixture: ComponentFixture<UsernameInitialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameInitialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameInitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
