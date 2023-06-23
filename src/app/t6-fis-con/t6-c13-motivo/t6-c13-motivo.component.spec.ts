import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C13MotivoComponent } from './t6-c13-motivo.component';

describe('T6C13MotivoComponent', () => {
  let component: T6C13MotivoComponent;
  let fixture: ComponentFixture<T6C13MotivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C13MotivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C13MotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
