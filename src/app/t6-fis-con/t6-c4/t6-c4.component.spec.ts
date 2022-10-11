import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C4Component } from './t6-c4.component';

describe('T6C4Component', () => {
  let component: T6C4Component;
  let fixture: ComponentFixture<T6C4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
