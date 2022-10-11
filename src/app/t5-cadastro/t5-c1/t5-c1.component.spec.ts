import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C1Component } from './t5-c1.component';

describe('T5C1Component', () => {
  let component: T5C1Component;
  let fixture: ComponentFixture<T5C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
