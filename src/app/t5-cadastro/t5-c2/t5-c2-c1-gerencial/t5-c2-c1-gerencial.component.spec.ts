import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C2C1GerencialComponent } from './t5-c2-c1-gerencial.component';

describe('T5C2C1GerencialComponent', () => {
  let component: T5C2C1GerencialComponent;
  let fixture: ComponentFixture<T5C2C1GerencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C2C1GerencialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C2C1GerencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
