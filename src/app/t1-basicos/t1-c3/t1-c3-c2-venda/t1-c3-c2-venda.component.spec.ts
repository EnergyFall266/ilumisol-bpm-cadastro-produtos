import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C3C2VendaComponent } from './t1-c3-c2-venda.component';

describe('T1C3C2VendaComponent', () => {
  let component: T1C3C2VendaComponent;
  let fixture: ComponentFixture<T1C3C2VendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C3C2VendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C3C2VendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
