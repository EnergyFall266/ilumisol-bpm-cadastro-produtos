import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C11SituCofComprasComponent } from './t6-c11-situ-cof-compras.component';

describe('T6C11SituCofComprasComponent', () => {
  let component: T6C11SituCofComprasComponent;
  let fixture: ComponentFixture<T6C11SituCofComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C11SituCofComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C11SituCofComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
