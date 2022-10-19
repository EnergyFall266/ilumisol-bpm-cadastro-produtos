import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C1C2AgrupComponent } from './t5-c1-c2-agrup.component';

describe('T5C1C2AgrupComponent', () => {
  let component: T5C1C2AgrupComponent;
  let fixture: ComponentFixture<T5C1C2AgrupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C1C2AgrupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C1C2AgrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
