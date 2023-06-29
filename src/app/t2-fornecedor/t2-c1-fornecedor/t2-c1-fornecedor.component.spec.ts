import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2C1FornecedorComponent } from './t2-c1-fornecedor.component';

describe('T2C1FornecedorComponent', () => {
  let component: T2C1FornecedorComponent;
  let fixture: ComponentFixture<T2C1FornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2C1FornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2C1FornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
