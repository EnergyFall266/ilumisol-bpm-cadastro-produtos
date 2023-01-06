import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C5Component } from './t3-c5.component';

describe('T3C5Component', () => {
  let component: T3C5Component;
  let fixture: ComponentFixture<T3C5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
