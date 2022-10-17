import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2C4ComprasComponent } from './t6-c2-c4-compras.component';

describe('T6C2C4ComprasComponent', () => {
  let component: T6C2C4ComprasComponent;
  let fixture: ComponentFixture<T6C2C4ComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2C4ComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2C4ComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
