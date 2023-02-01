import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEventsDetailsComponent } from './free-events-details.component';

describe('FreeEventsDetailsComponent', () => {
  let component: FreeEventsDetailsComponent;
  let fixture: ComponentFixture<FreeEventsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeEventsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
