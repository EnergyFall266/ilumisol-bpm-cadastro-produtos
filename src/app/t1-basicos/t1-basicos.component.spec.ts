import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1BasicosComponent } from './t1-basicos.component';

describe('T1BasicosComponent', () => {
  let component: T1BasicosComponent;
  let fixture: ComponentFixture<T1BasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1BasicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1BasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
