import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpvsComponent } from './ppvs.component';

describe('PpvsComponent', () => {
  let component: PpvsComponent;
  let fixture: ComponentFixture<PpvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpvsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
