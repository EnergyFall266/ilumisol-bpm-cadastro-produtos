import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C8SituCofVendasComponent } from './t6-c8-situ-cof-vendas.component';

describe('T6C8SituCofVendasComponent', () => {
  let component: T6C8SituCofVendasComponent;
  let fixture: ComponentFixture<T6C8SituCofVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C8SituCofVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C8SituCofVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
