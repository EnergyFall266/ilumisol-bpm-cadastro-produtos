import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3C1DepositoComponent } from './t3-c1-deposito.component';

describe('T3C1DepositoComponent', () => {
  let component: T3C1DepositoComponent;
  let fixture: ComponentFixture<T3C1DepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3C1DepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3C1DepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
