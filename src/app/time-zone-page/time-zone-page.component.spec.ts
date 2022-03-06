import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZonePageComponent } from './time-zone-page.component';

describe('TimeZonePageComponent', () => {
  let component: TimeZonePageComponent;
  let fixture: ComponentFixture<TimeZonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeZonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
