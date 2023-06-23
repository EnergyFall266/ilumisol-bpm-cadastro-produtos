import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C7SituPisVendasComponent } from './t6-c7-situ-pis-vendas.component';

describe('T6C7SituPisVendasComponent', () => {
  let component: T6C7SituPisVendasComponent;
  let fixture: ComponentFixture<T6C7SituPisVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C7SituPisVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C7SituPisVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
