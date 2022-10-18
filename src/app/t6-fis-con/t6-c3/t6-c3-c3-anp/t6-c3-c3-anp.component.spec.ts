import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3C3AnpComponent } from './t6-c3-c3-anp.component';

describe('T6C3C3AnpComponent', () => {
  let component: T6C3C3AnpComponent;
  let fixture: ComponentFixture<T6C3C3AnpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3C3AnpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3C3AnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
