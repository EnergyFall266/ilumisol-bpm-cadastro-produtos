import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C4OrigemComponent } from './t1-c4-origem.component';

describe('T1C4OrigemComponent', () => {
  let component: T1C4OrigemComponent;
  let fixture: ComponentFixture<T1C4OrigemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C4OrigemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C4OrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
