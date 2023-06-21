import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C11MultinivelComponent } from './t1-c11-multinivel.component';

describe('T1C11MultinivelComponent', () => {
  let component: T1C11MultinivelComponent;
  let fixture: ComponentFixture<T1C11MultinivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C11MultinivelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C11MultinivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
