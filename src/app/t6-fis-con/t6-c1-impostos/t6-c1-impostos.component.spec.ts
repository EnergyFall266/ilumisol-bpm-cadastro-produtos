import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C1ImpostosComponent } from './t6-c1-impostos.component';

describe('T6C1ImpostosComponent', () => {
  let component: T6C1ImpostosComponent;
  let fixture: ComponentFixture<T6C1ImpostosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C1ImpostosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C1ImpostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
