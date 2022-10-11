import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C4Component } from './t1-c4.component';

describe('T1C4Component', () => {
  let component: T1C4Component;
  let fixture: ComponentFixture<T1C4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
