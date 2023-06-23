import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C9EnquadramentoComponent } from './t6-c9-enquadramento.component';

describe('T6C9EnquadramentoComponent', () => {
  let component: T6C9EnquadramentoComponent;
  let fixture: ComponentFixture<T6C9EnquadramentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C9EnquadramentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C9EnquadramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
