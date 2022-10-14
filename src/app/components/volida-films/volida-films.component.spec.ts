import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolidaFilmsComponent } from './volida-films.component';

describe('VolidaFilmsComponent', () => {
  let component: VolidaFilmsComponent;
  let fixture: ComponentFixture<VolidaFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolidaFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolidaFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
