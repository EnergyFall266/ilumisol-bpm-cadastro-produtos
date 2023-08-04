import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C16EnquaEspeComponent } from './t1-c16-enqua-espe.component';

describe('T1C16EnquaEspeComponent', () => {
  let component: T1C16EnquaEspeComponent;
  let fixture: ComponentFixture<T1C16EnquaEspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C16EnquaEspeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C16EnquaEspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
