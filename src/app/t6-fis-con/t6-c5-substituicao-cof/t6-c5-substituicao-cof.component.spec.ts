import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C5SubstituicaoCofComponent } from './t6-c5-substituicao-cof.component';

describe('T6C5SubstituicaoCofComponent', () => {
  let component: T6C5SubstituicaoCofComponent;
  let fixture: ComponentFixture<T6C5SubstituicaoCofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C5SubstituicaoCofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C5SubstituicaoCofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
