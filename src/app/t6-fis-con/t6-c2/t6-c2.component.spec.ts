import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2Component } from './t6-c2.component';

describe('T6C2Component', () => {
  let component: T6C2Component;
  let fixture: ComponentFixture<T6C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
