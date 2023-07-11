import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C13AnexoComponent } from './t1-c13-anexo.component';

describe('T1C13AnexoComponent', () => {
  let component: T1C13AnexoComponent;
  let fixture: ComponentFixture<T1C13AnexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C13AnexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C13AnexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
