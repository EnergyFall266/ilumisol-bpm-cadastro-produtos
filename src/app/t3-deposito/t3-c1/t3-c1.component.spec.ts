import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C1Component } from './t3-c1.component';

describe('T3C1Component', () => {
  let component: T3C1Component;
  let fixture: ComponentFixture<T3C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
