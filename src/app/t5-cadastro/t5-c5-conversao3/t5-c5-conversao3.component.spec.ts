import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C5Conversao3Component } from './t5-c5-conversao3.component';

describe('T5C5Conversao3Component', () => {
  let component: T5C5Conversao3Component;
  let fixture: ComponentFixture<T5C5Conversao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C5Conversao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C5Conversao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
