import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C12DepositoComponent } from './t1-c12-deposito.component';

describe('T1C12DepositoComponent', () => {
  let component: T1C12DepositoComponent;
  let fixture: ComponentFixture<T1C12DepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C12DepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C12DepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
