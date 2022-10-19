import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1C5MedComponent } from './t1-c1-c5-med.component';

describe('T1C1C5MedComponent', () => {
  let component: T1C1C5MedComponent;
  let fixture: ComponentFixture<T1C1C5MedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1C5MedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1C5MedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
