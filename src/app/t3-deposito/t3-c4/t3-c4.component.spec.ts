import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C4Component } from './t3-c4.component';

describe('T3C4Component', () => {
  let component: T3C4Component;
  let fixture: ComponentFixture<T3C4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
