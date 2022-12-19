import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C4C3QuimicoComponent } from './t1-c4-c3-quimico.component';

describe('T1C4C3QuimicoComponent', () => {
  let component: T1C4C3QuimicoComponent;
  let fixture: ComponentFixture<T1C4C3QuimicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C4C3QuimicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C4C3QuimicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
