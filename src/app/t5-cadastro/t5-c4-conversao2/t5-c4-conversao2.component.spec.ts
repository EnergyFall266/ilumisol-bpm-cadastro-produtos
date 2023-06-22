import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C4Conversao2Component } from './t5-c4-conversao2.component';

describe('T5C4Conversao2Component', () => {
  let component: T5C4Conversao2Component;
  let fixture: ComponentFixture<T5C4Conversao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C4Conversao2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C4Conversao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
