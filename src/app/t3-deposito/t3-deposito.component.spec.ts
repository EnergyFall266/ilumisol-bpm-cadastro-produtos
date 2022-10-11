import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3DepositoComponent } from './t3-deposito.component';

describe('T3DepositoComponent', () => {
  let component: T3DepositoComponent;
  let fixture: ComponentFixture<T3DepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3DepositoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3DepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
