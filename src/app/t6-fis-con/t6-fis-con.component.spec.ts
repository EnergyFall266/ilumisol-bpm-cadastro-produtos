import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T6FisConComponent } from './t6-fis-con.component';

describe('T6FisConComponent', () => {
  let component: T6FisConComponent;
  let fixture: ComponentFixture<T6FisConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T6FisConComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T6FisConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
