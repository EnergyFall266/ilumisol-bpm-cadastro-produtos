import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C15RegiTribComponent } from './t6-c15-regi-trib.component';

describe('T6C15RegiTribComponent', () => {
  let component: T6C15RegiTribComponent;
  let fixture: ComponentFixture<T6C15RegiTribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C15RegiTribComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C15RegiTribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
