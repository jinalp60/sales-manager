import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAuthComponent } from './check-auth.component';

describe('CheckAuthComponent', () => {
  let component: CheckAuthComponent;
  let fixture: ComponentFixture<CheckAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
