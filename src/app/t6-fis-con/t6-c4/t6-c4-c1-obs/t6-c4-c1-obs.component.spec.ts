import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C4C1ObsComponent } from './t6-c4-c1-obs.component';

describe('T6C4C1ObsComponent', () => {
  let component: T6C4C1ObsComponent;
  let fixture: ComponentFixture<T6C4C1ObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C4C1ObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C4C1ObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
