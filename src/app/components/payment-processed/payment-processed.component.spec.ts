import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentProcessedComponent } from './payment-processed.component';

describe('PaymentProcessedComponent', () => {
  let component: PaymentProcessedComponent;
  let fixture: ComponentFixture<PaymentProcessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentProcessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
