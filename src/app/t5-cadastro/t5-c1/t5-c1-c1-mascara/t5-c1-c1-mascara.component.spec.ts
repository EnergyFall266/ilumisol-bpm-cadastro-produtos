import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T5C1C1MascaraComponent } from './t5-c1-c1-mascara.component';

describe('T5C1C1MascaraComponent', () => {
  let component: T5C1C1MascaraComponent;
  let fixture: ComponentFixture<T5C1C1MascaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T5C1C1MascaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T5C1C1MascaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
