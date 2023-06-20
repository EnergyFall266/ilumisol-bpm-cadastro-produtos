import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C5FamiliaComponent } from './t1-c5-familia.component';

describe('T1C5FamiliaComponent', () => {
  let component: T1C5FamiliaComponent;
  let fixture: ComponentFixture<T1C5FamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C5FamiliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C5FamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
