import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4ObsAneComponent } from './t4-obs-ane.component';

describe('T4ObsAneComponent', () => {
  let component: T4ObsAneComponent;
  let fixture: ComponentFixture<T4ObsAneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4ObsAneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4ObsAneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
