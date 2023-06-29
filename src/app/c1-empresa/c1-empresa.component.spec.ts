import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1EmpresaComponent } from './c1-empresa.component';

describe('C1EmpresaComponent', () => {
  let component: C1EmpresaComponent;
  let fixture: ComponentFixture<C1EmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1EmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C1EmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
