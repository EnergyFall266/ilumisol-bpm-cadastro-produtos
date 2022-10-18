import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3C2MotivComponent } from './t6-c3-c2-motiv.component';

describe('T6C3C2MotivComponent', () => {
  let component: T6C3C2MotivComponent;
  let fixture: ComponentFixture<T6C3C2MotivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3C2MotivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3C2MotivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
