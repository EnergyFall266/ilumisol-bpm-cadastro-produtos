import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C17SituIpiComprasComponent } from './t6-c17-situ-ipi-compras.component';

describe('T6C17SituIpiComprasComponent', () => {
  let component: T6C17SituIpiComprasComponent;
  let fixture: ComponentFixture<T6C17SituIpiComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C17SituIpiComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C17SituIpiComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
