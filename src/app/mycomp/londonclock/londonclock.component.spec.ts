import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonclockComponent } from './londonclock.component';

describe('LondonclockComponent', () => {
  let component: LondonclockComponent;
  let fixture: ComponentFixture<LondonclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
