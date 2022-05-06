import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStreamDetailsComponent } from './recent-stream-details.component';

describe('ComedySpecialDetailsComponent', () => {
  let component: RecentStreamDetailsComponent;
  let fixture: ComponentFixture<RecentStreamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentStreamDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentStreamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
