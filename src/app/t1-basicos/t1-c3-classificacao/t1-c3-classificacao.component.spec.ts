import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C3ClassificacaoComponent } from './t1-c3-classificacao.component';

describe('T1C3ClassificacaoComponent', () => {
  let component: T1C3ClassificacaoComponent;
  let fixture: ComponentFixture<T1C3ClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C3ClassificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C3ClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
