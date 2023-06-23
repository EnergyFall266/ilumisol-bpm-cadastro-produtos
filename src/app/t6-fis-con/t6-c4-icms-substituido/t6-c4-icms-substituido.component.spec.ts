import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C4IcmsSubstituidoComponent } from './t6-c4-icms-substituido.component';

describe('T6C4IcmsSubstituidoComponent', () => {
  let component: T6C4IcmsSubstituidoComponent;
  let fixture: ComponentFixture<T6C4IcmsSubstituidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C4IcmsSubstituidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C4IcmsSubstituidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
