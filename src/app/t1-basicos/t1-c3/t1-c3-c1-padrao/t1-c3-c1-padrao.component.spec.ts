import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C3C1PadraoComponent } from './t1-c3-c1-padrao.component';

describe('T1C3C1PadraoComponent', () => {
  let component: T1C3C1PadraoComponent;
  let fixture: ComponentFixture<T1C3C1PadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C3C1PadraoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C3C1PadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
