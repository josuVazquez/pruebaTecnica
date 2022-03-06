import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchPageComponent } from './stop-watch-page.component';

describe('StopWatchPageComponent', () => {
  let component: StopWatchPageComponent;
  let fixture: ComponentFixture<StopWatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopWatchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StopWatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
