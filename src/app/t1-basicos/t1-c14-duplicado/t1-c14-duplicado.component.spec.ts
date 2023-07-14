import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C14DuplicadoComponent } from './t1-c14-duplicado.component';

describe('T1C14DuplicadoComponent', () => {
  let component: T1C14DuplicadoComponent;
  let fixture: ComponentFixture<T1C14DuplicadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C14DuplicadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C14DuplicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
