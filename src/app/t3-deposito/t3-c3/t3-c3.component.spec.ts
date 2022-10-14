import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C3Component } from './t3-c3.component';

describe('T3C3Component', () => {
  let component: T3C3Component;
  let fixture: ComponentFixture<T3C3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
