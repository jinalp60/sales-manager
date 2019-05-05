import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserInputComponent } from './login-user-input.component';

describe('LoginUserInputComponent', () => {
  let component: LoginUserInputComponent;
  let fixture: ComponentFixture<LoginUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
