import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2C7MultinivelComponent } from './t1-c2-c7-multinivel.component';

describe('T1C2C7MultinivelComponent', () => {
  let component: T1C2C7MultinivelComponent;
  let fixture: ComponentFixture<T1C2C7MultinivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2C7MultinivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2C7MultinivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
