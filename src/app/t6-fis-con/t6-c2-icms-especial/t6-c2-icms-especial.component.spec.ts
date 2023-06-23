import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2IcmsEspecialComponent } from './t6-c2-icms-especial.component';

describe('T6C2IcmsEspecialComponent', () => {
  let component: T6C2IcmsEspecialComponent;
  let fixture: ComponentFixture<T6C2IcmsEspecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2IcmsEspecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2IcmsEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
