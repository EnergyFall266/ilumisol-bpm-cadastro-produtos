import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C12EnquadramentoEspeComponent } from './t6-c12-enquadramento-espe.component';

describe('T6C12EnquadramentoEspeComponent', () => {
  let component: T6C12EnquadramentoEspeComponent;
  let fixture: ComponentFixture<T6C12EnquadramentoEspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C12EnquadramentoEspeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C12EnquadramentoEspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
