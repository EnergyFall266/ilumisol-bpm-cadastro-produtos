import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C3BarrasComponent } from './t1-c2-c3-barras.component';

describe('T1C2C3BarrasComponent', () => {
  let component: T1C2C3BarrasComponent;
  let fixture: ComponentFixture<T1C2C3BarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C3BarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C3BarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
