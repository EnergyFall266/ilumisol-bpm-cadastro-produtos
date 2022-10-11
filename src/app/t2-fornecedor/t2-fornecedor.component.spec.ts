import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2FornecedorComponent } from './t2-fornecedor.component';

describe('T2FornecedorComponent', () => {
  let component: T2FornecedorComponent;
  let fixture: ComponentFixture<T2FornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2FornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2FornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
