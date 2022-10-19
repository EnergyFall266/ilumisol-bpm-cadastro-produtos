import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C4ComercialComponent } from './t1-c2-c4-comercial.component';

describe('T1C2C4ComercialComponent', () => {
  let component: T1C2C4ComercialComponent;
  let fixture: ComponentFixture<T1C2C4ComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C4ComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C4ComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
