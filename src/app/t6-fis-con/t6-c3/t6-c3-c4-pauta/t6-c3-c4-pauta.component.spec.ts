import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C3C4PautaComponent } from './t6-c3-c4-pauta.component';

describe('T6C3C4PautaComponent', () => {
  let component: T6C3C4PautaComponent;
  let fixture: ComponentFixture<T6C3C4PautaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C3C4PautaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C3C4PautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
