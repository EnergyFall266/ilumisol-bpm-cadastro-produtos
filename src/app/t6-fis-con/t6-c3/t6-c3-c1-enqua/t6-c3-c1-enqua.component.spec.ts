import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3C1EnquaComponent } from './t6-c3-c1-enqua.component';

describe('T6C3C1EnquaComponent', () => {
  let component: T6C3C1EnquaComponent;
  let fixture: ComponentFixture<T6C3C1EnquaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3C1EnquaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3C1EnquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
