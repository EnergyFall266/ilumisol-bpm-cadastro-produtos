import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C4C1ToxicologicaComponent } from './t1-c4-c1-toxicologica.component';

describe('T1C4C1ToxicologicaComponent', () => {
  let component: T1C4C1ToxicologicaComponent;
  let fixture: ComponentFixture<T1C4C1ToxicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C4C1ToxicologicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C4C1ToxicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
