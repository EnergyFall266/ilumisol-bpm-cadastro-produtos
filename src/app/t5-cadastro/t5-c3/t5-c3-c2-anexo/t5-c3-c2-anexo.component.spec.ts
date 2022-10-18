import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C3C2AnexoComponent } from './t5-c3-c2-anexo.component';

describe('T5C3C2AnexoComponent', () => {
  let component: T5C3C2AnexoComponent;
  let fixture: ComponentFixture<T5C3C2AnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C3C2AnexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C3C2AnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
