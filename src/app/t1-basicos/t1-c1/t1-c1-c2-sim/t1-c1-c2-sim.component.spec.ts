import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1C2SimComponent } from './t1-c1-c2-sim.component';

describe('T1C1C2SimComponent', () => {
  let component: T1C1C2SimComponent;
  let fixture: ComponentFixture<T1C1C2SimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1C2SimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1C2SimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
