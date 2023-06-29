import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2C2UnidadeComponent } from './t2-c2-unidade.component';

describe('T2C2UnidadeComponent', () => {
  let component: T2C2UnidadeComponent;
  let fixture: ComponentFixture<T2C2UnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2C2UnidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2C2UnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
