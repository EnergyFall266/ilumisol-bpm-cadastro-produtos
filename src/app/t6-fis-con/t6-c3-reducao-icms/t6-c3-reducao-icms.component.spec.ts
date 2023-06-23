import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3ReducaoIcmsComponent } from './t6-c3-reducao-icms.component';

describe('T6C3ReducaoIcmsComponent', () => {
  let component: T6C3ReducaoIcmsComponent;
  let fixture: ComponentFixture<T6C3ReducaoIcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3ReducaoIcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3ReducaoIcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
