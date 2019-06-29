import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductQuantityModalComponent } from './add-product-quantity-modal.component';

describe('AddProductQuantityModalComponent', () => {
  let component: AddProductQuantityModalComponent;
  let fixture: ComponentFixture<AddProductQuantityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductQuantityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductQuantityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
