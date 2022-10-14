import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C2Component } from './t3-c2.component';

describe('T3C2Component', () => {
  let component: T3C2Component;
  let fixture: ComponentFixture<T3C2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
