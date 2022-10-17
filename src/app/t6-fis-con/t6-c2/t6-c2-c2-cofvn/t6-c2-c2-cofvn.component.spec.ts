import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2C2CofvnComponent } from './t6-c2-c2-cofvn.component';

describe('T6C2C2CofvnComponent', () => {
  let component: T6C2C2CofvnComponent;
  let fixture: ComponentFixture<T6C2C2CofvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2C2CofvnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2C2CofvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
