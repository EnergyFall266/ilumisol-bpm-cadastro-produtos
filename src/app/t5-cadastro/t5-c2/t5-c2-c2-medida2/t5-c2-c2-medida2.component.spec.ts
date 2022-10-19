import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C2C2Medida2Component } from './t5-c2-c2-medida2.component';

describe('T5C2C2Medida2Component', () => {
  let component: T5C2C2Medida2Component;
  let fixture: ComponentFixture<T5C2C2Medida2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C2C2Medida2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C2C2Medida2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
