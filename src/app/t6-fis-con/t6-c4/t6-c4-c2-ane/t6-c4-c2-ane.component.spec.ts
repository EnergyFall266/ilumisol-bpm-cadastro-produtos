import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C4C2AneComponent } from './t6-c4-c2-ane.component';

describe('T6C4C2AneComponent', () => {
  let component: T6C4C2AneComponent;
  let fixture: ComponentFixture<T6C4C2AneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C4C2AneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C4C2AneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
