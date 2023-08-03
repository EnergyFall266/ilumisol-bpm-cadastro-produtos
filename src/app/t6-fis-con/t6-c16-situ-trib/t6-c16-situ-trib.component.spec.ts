import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6C16SituTribComponent } from './t6-c16-situ-trib.component';

describe('T6C16SituTribComponent', () => {
  let component: T6C16SituTribComponent;
  let fixture: ComponentFixture<T6C16SituTribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6C16SituTribComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6C16SituTribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
