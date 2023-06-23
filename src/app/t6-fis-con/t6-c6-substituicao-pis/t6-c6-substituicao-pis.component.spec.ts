import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C6SubstituicaoPisComponent } from './t6-c6-substituicao-pis.component';

describe('T6C6SubstituicaoPisComponent', () => {
  let component: T6C6SubstituicaoPisComponent;
  let fixture: ComponentFixture<T6C6SubstituicaoPisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C6SubstituicaoPisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C6SubstituicaoPisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
