import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2C1PisvnComponent } from './t6-c2-c1-pisvn.component';

describe('T6C2C1PisvnComponent', () => {
  let component: T6C2C1PisvnComponent;
  let fixture: ComponentFixture<T6C2C1PisvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2C1PisvnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2C1PisvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
