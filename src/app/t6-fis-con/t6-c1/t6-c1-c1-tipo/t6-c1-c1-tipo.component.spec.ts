import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C1C1TipoComponent } from './t6-c1-c1-tipo.component';

describe('T6C1C1TipoComponent', () => {
  let component: T6C1C1TipoComponent;
  let fixture: ComponentFixture<T6C1C1TipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C1C1TipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C1C1TipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
