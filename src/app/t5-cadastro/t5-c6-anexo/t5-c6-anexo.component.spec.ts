import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C6AnexoComponent } from './t5-c6-anexo.component';

describe('T5C6AnexoComponent', () => {
  let component: T5C6AnexoComponent;
  let fixture: ComponentFixture<T5C6AnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C6AnexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C6AnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
