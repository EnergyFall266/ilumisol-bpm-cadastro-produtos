import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C2Component } from './t5-c2.component';

describe('T5C2Component', () => {
  let component: T5C2Component;
  let fixture: ComponentFixture<T5C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
