import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1C1C4FamComponent } from './t1-c1-c4-fam.component';

describe('T1C1C4FamComponent', () => {
  let component: T1C1C4FamComponent;
  let fixture: ComponentFixture<T1C1C4FamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1C1C4FamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1C1C4FamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
