import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3Component } from './t6-c3.component';

describe('T6C3Component', () => {
  let component: T6C3Component;
  let fixture: ComponentFixture<T6C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
