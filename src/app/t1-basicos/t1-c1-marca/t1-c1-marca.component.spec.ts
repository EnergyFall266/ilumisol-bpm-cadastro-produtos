import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1MarcaComponent } from './t1-c1-marca.component';

describe('T1C1MarcaComponent', () => {
  let component: T1C1MarcaComponent;
  let fixture: ComponentFixture<T1C1MarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1MarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1MarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
