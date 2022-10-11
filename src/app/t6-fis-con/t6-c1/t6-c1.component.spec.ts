import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C1Component } from './t6-c1.component';

describe('T6C1Component', () => {
  let component: T6C1Component;
  let fixture: ComponentFixture<T6C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
