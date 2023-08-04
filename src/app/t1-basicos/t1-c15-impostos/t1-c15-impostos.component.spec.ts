import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C15ImpostosComponent } from './t1-c15-impostos.component';

describe('T1C15ImpostosComponent', () => {
  let component: T1C15ImpostosComponent;
  let fixture: ComponentFixture<T1C15ImpostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C15ImpostosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C15ImpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
