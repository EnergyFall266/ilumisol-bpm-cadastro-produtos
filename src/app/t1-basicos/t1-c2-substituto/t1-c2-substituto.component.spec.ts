import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C2SubstitutoComponent } from './t1-c2-substituto.component';

describe('T1C2SubstitutoComponent', () => {
  let component: T1C2SubstitutoComponent;
  let fixture: ComponentFixture<T1C2SubstitutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C2SubstitutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C2SubstitutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
