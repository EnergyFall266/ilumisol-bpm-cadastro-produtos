import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C2FiscalComponent } from './t1-c2-c2-fiscal.component';

describe('T1C2C2FiscalComponent', () => {
  let component: T1C2C2FiscalComponent;
  let fixture: ComponentFixture<T1C2C2FiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C2FiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C2FiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
