import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C1C3SubstituicaoComponent } from './t6-c1-c3-substituicao.component';

describe('T6C1C3SubstituicaoComponent', () => {
  let component: T6C1C3SubstituicaoComponent;
  let fixture: ComponentFixture<T6C1C3SubstituicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C1C3SubstituicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C1C3SubstituicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
