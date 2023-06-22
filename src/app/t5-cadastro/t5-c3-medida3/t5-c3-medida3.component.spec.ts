import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C3Medida3Component } from './t5-c3-medida3.component';

describe('T5C3Medida3Component', () => {
  let component: T5C3Medida3Component;
  let fixture: ComponentFixture<T5C3Medida3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C3Medida3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C3Medida3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
