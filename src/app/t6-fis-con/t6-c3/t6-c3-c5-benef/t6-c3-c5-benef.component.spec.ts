import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3C5BenefComponent } from './t6-c3-c5-benef.component';

describe('T6C3C5BenefComponent', () => {
  let component: T6C3C5BenefComponent;
  let fixture: ComponentFixture<T6C3C5BenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3C5BenefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3C5BenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
