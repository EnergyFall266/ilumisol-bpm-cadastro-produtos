import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C2C3EnquaComponent } from './t6-c2-c3-enqua.component';

describe('T6C2C3EnquaComponent', () => {
  let component: T6C2C3EnquaComponent;
  let fixture: ComponentFixture<T6C2C3EnquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C2C3EnquaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C2C3EnquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
