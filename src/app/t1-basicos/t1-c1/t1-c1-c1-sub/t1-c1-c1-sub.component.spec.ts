import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1C1SubComponent } from './t1-c1-c1-sub.component';

describe('T1C1C1SubComponent', () => {
  let component: T1C1C1SubComponent;
  let fixture: ComponentFixture<T1C1C1SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1C1SubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1C1SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
