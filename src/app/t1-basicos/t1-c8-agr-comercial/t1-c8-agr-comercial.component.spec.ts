import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C8AgrComercialComponent } from './t1-c8-agr-comercial.component';

describe('T1C8AgrComercialComponent', () => {
  let component: T1C8AgrComercialComponent;
  let fixture: ComponentFixture<T1C8AgrComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C8AgrComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C8AgrComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
