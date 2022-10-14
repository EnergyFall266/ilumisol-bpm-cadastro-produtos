import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C1C2IcmsComponent } from './t6-c1-c2-icms.component';

describe('T6C1C2IcmsComponent', () => {
  let component: T6C1C2IcmsComponent;
  let fixture: ComponentFixture<T6C1C2IcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C1C2IcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C1C2IcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
