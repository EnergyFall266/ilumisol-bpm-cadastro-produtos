import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C10SituPisComprasComponent } from './t6-c10-situ-pis-compras.component';

describe('T6C10SituPisComprasComponent', () => {
  let component: T6C10SituPisComprasComponent;
  let fixture: ComponentFixture<T6C10SituPisComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C10SituPisComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C10SituPisComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
