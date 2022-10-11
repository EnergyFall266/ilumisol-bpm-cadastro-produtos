import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C3Component } from './t5-c3.component';

describe('T5C3Component', () => {
  let component: T5C3Component;
  let fixture: ComponentFixture<T5C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
