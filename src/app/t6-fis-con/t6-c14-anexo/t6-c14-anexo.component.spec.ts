import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C14AnexoComponent } from './t6-c14-anexo.component';

describe('T6C14AnexoComponent', () => {
  let component: T6C14AnexoComponent;
  let fixture: ComponentFixture<T6C14AnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C14AnexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C14AnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
