import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5CadastroComponent } from './t5-cadastro.component';

describe('T5CadastroComponent', () => {
  let component: T5CadastroComponent;
  let fixture: ComponentFixture<T5CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5CadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
