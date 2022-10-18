import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C3C1PesosComponent } from './t5-c3-c1-pesos.component';

describe('T5C3C1PesosComponent', () => {
  let component: T5C3C1PesosComponent;
  let fixture: ComponentFixture<T5C3C1PesosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C3C1PesosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C3C1PesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
