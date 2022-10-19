import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C6AgrosysComponent } from './t1-c2-c6-agrosys.component';

describe('T1C2C6AgrosysComponent', () => {
  let component: T1C2C6AgrosysComponent;
  let fixture: ComponentFixture<T1C2C6AgrosysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C6AgrosysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C6AgrosysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
