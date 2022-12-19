import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C4C2RiscoComponent } from './t1-c4-c2-risco.component';

describe('T1C4C2RiscoComponent', () => {
  let component: T1C4C2RiscoComponent;
  let fixture: ComponentFixture<T1C4C2RiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C4C2RiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C4C2RiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
