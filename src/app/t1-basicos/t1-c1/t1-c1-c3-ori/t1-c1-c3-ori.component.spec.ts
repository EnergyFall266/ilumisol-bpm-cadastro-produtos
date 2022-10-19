import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1C3OriComponent } from './t1-c1-c3-ori.component';

describe('T1C1C3OriComponent', () => {
  let component: T1C1C3OriComponent;
  let fixture: ComponentFixture<T1C1C3OriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1C3OriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1C3OriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
